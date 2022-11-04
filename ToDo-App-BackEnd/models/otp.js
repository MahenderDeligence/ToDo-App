const mongoose = require("mongoose")

const otpSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true },
    code: { type: Number, required: true },
    expireIN: { type: Number }

}, { timestamps: true })

const Otp = mongoose.model('Otp', otpSchema)

module.exports = Otp