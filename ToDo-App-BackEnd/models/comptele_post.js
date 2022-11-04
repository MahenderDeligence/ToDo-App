const mongoose = require("mongoose")

const complete_postSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String },
    complete: { type: Boolean, require: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true, versionKey: false })

const CompletePost = mongoose.model('CompletePost', complete_postSchema)

module.exports = CompletePost