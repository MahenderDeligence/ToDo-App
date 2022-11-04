const Post = require("../models/post")
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const createPost = async (req, res) => {
    try {
        let headers = req.headers
        let token = headers.authorization.split(" ")[1]

        const decoded = jwt.verify(token, "DELIGENCE")

        const currentUser = await User.findById(decoded.id)


        const { title, content } = req.body
        const post = new Post({
            title, content, owner: currentUser._id
        })

        const postData = await post.save()
        res.status(200).json(postData)

    } catch (error) {
        res.status(400).json({ message: error })
    }
}

const readPosts = async (req, res) => {
    try {
        console.log(req);
        let postsData = await Post.find({owner: req.user._id}).populate("owner", "-password")
        res.status(200).json(postsData)
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

const deletePost = async (req, res) => {
    // console.log(req.params.id);
    try {
        const id = req.params.id
        let data = await Post.findById(id)
        
        console.log(req.user._id )
        console.log(data.owner )

        if(data.owner === req.user._id) {
            console.log("hello")
            let postsData = await Post.findByIdAndDelete(id)
            res.status(200).json(postsData)
        } else{
            res.status(400).json("only user can deleted")
        }
    } catch (error) {
        res.status(400).json({ message: error })
    }
}


const updatePost = async (req, res) => {
    const id = req.params.id;

    Post.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update !!`
                });
            } else res.send({ message: "updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tutorial with id=" + id 
            });
        });
};


module.exports = { createPost, readPosts, deletePost, updatePost }