const express = require("express")
const { registerUser, loginUser, forgotPass, changePass } = require("../controllers/user")
const router = express.Router()

router.post("/register", registerUser)
router.post("/login", loginUser)
router.post("/forgot-pass", forgotPass)
router.post("/change-pass", changePass)


module.exports = router