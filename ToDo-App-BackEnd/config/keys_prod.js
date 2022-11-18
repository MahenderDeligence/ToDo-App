module.exports = {
    MONGO_URI: "mongodb://localhost:27017/admin",
    privateKey: process.env.VAPID_PRIVATE_KEY,
    publicKey: process.env.VAPID_PUBLIC_KEY
}