const express = require("express")
const router = express.Router()
const { createPost, readPosts, deletePost, updatePost } = require("../controllers/post")
const { authorize } = require("../middleware/auth")

router.post("/", createPost)
router.get("/", authorize, readPosts)
router.delete("/:id", authorize, deletePost)
router.put("/:id", authorize, updatePost)

module.exports = router