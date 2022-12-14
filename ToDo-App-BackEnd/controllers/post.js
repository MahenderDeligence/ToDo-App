const Post = require("../models/post")
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const createPost = async (req, res) => {
    try {
        let headers = req.headers
        let token = headers.authorization.split(" ")[1]

        const decoded = jwt.verify(token, "DELIGENCE")

        const currentUser = await User.findById(decoded.id)

        const { title, content, isStatus, lastDate } = req.body
        const post = new Post({
            title, content, isStatus, lastDate, owner: currentUser._id
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
    try {
        const id = req.params.id
        let data = await Post.findById(id)

        console.log(data.owner)
        console.log(req.user._id)
        if(data.owner.equals(req.user._id)) {
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
    let data = await Post.findById(id)
    if(data.owner.equals(req.user._id)){
        Post.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update !!`
                });
            } else res.send({ message: "updated successfully." });
        })
    }
    else{
        res.status(500).send({
            message: "only user can update !!"
        });
    }
};


const completeOrNot = async (req, res) => {
    const match = {}
    if(req.query.isStatus){
        match.isStatus = req.query.isStatus === 'true'
    }
    try {
        let postsData = await Post.find({owner: req.user._id, isStatus: match.isStatus}).populate("owner", "-password")

        res.status(200).json(postsData)
    } catch (error) {
        // console.log("error", error)
        res.status(400).json({ message: error })
    }
};

const lastDateToday = async (req, res) => {

    const date = new Date();

    const today = formatDate(date);

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }
      
    function formatDate(date) {
        return [
            padTo2Digits(date.getDate()),
            padTo2Digits(date.getMonth() + 1),
            date.getFullYear(),
        ].join('-');
    }
    
    try {
        let postsData = await Post.find({owner: req.user._id, lastDate: today}).populate("owner", "-password")
        res.status(200).json(postsData)
    } catch (error) {
        res.status(400).json({ message: "only user can see !!" })
    }
};

const lastDateWeek = async (req, res) => {

    const date = new Date();

    const today = formatDate(date);

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }
      
    function formatDate(date) {
        return [
            padTo2Digits(date.getDate() + 7),
            padTo2Digits(date.getMonth() + 1),
            date.getFullYear(),
        ].join('-');
    }
    
    try {
        let postsData = await Post.find({owner: req.user._id, lastDate: today}).populate("owner", "-password")
        // console.log(postsData)
        res.status(200).json(postsData)
    } catch (error) {
        res.status(400).json({ message: "only user can see !!" })
    }
};


const lastDateMonth = async (req, res) => {

    const date = new Date();

    const today = formatDate(date);

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }
      
    function formatDate(date) {
        return [
            padTo2Digits(date.getDate()),
            padTo2Digits(date.getMonth() + 2),
            date.getFullYear(),
        ].join('-');
    }
    try {
        let postsData = await Post.find({owner: req.user._id, lastDate: today}).populate("owner", "-password")
        res.status(200).json(postsData)
    } catch (error) {
        res.status(400).json({ message: "only user can see !!" })
    }
};


module.exports = { 
    createPost, 
    readPosts, 
    deletePost, 
    updatePost, 
    completeOrNot, 
    lastDateToday,
    lastDateWeek,
    lastDateMonth
};