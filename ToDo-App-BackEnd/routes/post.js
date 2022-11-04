const express = require("express")
const router = express.Router()
const { createPost, readPosts, deletePost, updatePost } = require("../controllers/post")
const { authorize } = require("../middleware/auth")

// http://localhost:8000/post/task
router.post("/create", createPost)

// http://localhost:8000/post/task
router.get("/task", authorize, readPosts)

// http://localhost:8000/post/delete/63624bb051c945363ee23953
router.delete("/delete/:id", authorize, deletePost)

// http://localhost:8000/post/update/63624bb051c945363ee23953
router.put("/update/:id", authorize, updatePost)

module.exports = router

