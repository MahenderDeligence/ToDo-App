//Imports
const express = require("express")
const mongoose = require("mongoose")
// const cors = require("cors")
const post = require("./routes/post")
const user = require("./routes/user")
const filter = require("./routes/filter")


const app = express()
const PORT = 8000
const MONGO_URI = "mongodb://localhost:27017/admin"

//URL and JSON middlewares and CORS
// app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Base route
app.use("/post", post)
app.use("/user", user)
app.use("/filter", filter)

//MongoDB connection
mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log("Contected to DB");
})

//Server Start
app.listen(PORT, () => {
    console.log("Connected to PORT " + PORT)
})