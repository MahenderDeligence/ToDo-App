const Post = require("../models/post")
const jwt = require("jsonwebtoken");
const CompletePost = require("../models/user");

const completePost = async (req, res) => {
    try {
        const id = req.params.id
        let data = await Post.findById(id)
        if(data.owner.equals(req.user.id)){
            const completePost = new CompletePost ({

            })
        }

    } catch (error) {
        
    }
}

const incomplete = async (req, res) =>{
    try {
        
    } catch (error) {
        
    }
}

module.exports = { completePost, }