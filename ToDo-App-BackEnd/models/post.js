const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String },
    isStatus: { type: Boolean, default: false },
    lastDate: { type: String, default: Date.toString('dd-mm-yyyy')},
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true, })

const Post = mongoose.model('Post', postSchema)

module.exports = Post