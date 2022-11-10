const express = require("express")
const router = express.Router()
const { createPost, readPosts, deletePost, updatePost, completeOrNot, lastDateToday, lastDateWeek, lastDateMonth } = require("../controllers/post")
const { authorize } = require("../middleware/auth")

// http://localhost:8000/post/create
router.post("/create", authorize, createPost)

// http://localhost:8000/post/task
router.get("/tasks", authorize, readPosts)

// http://localhost:8000/post/delete/63624bb051c945363ee23953
router.delete("/delete/:id", authorize, deletePost)

// http://localhost:8000/post/update/63624bb051c945363ee23953
router.put("/update/:id", authorize, updatePost)

// http://localhost:8000/post/task-comp
router.get("/task-comp", authorize, completeOrNot)

// http://localhost:8000/post/today
router.get("/today", authorize, lastDateToday)

// http://localhost:8000/post/week
router.get("/week", authorize, lastDateWeek)

// http://localhost:8000/post/month
router.get("/month", authorize, lastDateMonth)

module.exports = router

