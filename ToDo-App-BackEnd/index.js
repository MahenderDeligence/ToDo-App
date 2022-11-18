//Imports
const express = require("express")
const mongoose = require("mongoose")
// const cors = require("cors")
const post = require("./routes/post")
const user = require("./routes/user")
const admin = require("./routes/admin")
const notification = require("./routes/notification/server")


const app = express()
const PORT = 8000
const MONGO_URI = "mongodb://localhost:27017/admin"

//URL and JSON middlewares and CORS
// app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



const server = require('./router/notification/server');
const push = require('./router/notification/push');
const subscribe = require('./router/notification/subscribe');
// const categories = require('./routes/categories');
// Load Keys
const keys = require('./config/keys');
//Handlebars Helpers

mongoose.Promise = global.Promise;


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));
// app.set('views', __dirname + '/public/js');

// Set global vars
app.use((req, res, next) => {
    res.locals.user = req.user || null;
    next();
});

app.use('/', server);
app.use('/subscribe', subscribe);
app.use('/push', push);



//Base route
app.use("/post", post)
app.use("/user", user)
app.use("/admin", admin)
app.use("/notification", notification)

//MongoDB connection
mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log("Contected to DB");
})

//Server Start
app.listen(PORT, () => {
    console.log("Connected to PORT " + PORT)
})