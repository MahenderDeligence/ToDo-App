const express = require("express")
const { registerUser, loginUser, forgotPass, changePass } = require("../controllers/user")
const router = express.Router()

// http://localhost:8000/user/register
router.post("/register", registerUser)

// http://localhost:8000/user/login
router.post("/login", loginUser)

// http://localhost:8000/user/forgot-pass
router.post("/forgot-pass", forgotPass)

// http://localhost:8000/user/change-pass
router.post("/change-pass", changePass)


module.exports = router