const express = require("express")
const router = express.Router()
const { completePost, incompletePost } = require("../controllers/filter")
const { authorize } = require("../middleware/auth")

// http://localhost:8000/filter/complete
router.post("/complete", authorize, completePost)

// http://localhost:8000/filter/incomplete
router.post("/incomplete", authorize, incompletePost)


module.exports = router