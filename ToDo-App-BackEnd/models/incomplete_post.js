const mongoose = require("mongoose")

const incomplete_postSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String },
    complete: { type: Boolean, require: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true , versionKey: false})

const InCompletePost = mongoose.model('InCompletePost', incomplete_postSchema)

module.exports = InCompletePost