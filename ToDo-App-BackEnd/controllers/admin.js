const Post = require("../models/post");
const User = require("../models/user");



const Complete = async (req, res) => {
    try {
        let totalData = await Post.find({owner: req.user._id}).count();
        let postsData = await Post.find({owner: req.user._id, isStatus: 'true'}).count()
        let Data = (postsData/totalData)*100
        res.status(200).json(Data)
    } catch (error) {
        // console.log("error", error)
        res.status(400).json({ message: error })
    }
};

const Incomplete = async (req, res) => {
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
        let totalData = await Post.find({owner: req.user._id}).count();
        let postsData = await Post.find({owner: req.user._id, lastDate: {$lt:today}, isStatus: 'false'}).count()
        let Data = (postsData/totalData)*100
        res.status(200).json(Data)
    } catch (error) {
        // console.log("error", error)
        res.status(400).json({ message: error })
    }
};

const Pending = async(req, res) => {

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
        let totalData = await Post.find({owner: req.user._id}).count();
        let postsData = await Post.find({owner: req.user._id, lastDate: {$gt:today}, isStatus: 'false'}).count()
        let Data = (postsData/totalData)*100
        res.status(200).json(Data)
        
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

const UsersData = async (req, res) => {
    try {
        let postsData = await User.find({}, '-password')
        res.status(200).json(postsData)
        
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

const DeleteUser = async(req, res) => {
    try {
        const id = req.params.id
       
        let postsData = await User.findByIdAndDelete(id)
        res.status(200).json(postsData)
        
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

module.exports = { Complete, Incomplete, Pending, UsersData, DeleteUser }