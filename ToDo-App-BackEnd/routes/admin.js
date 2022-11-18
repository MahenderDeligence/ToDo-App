const express = require('express');
const router = express.Router();
const {Complete, Incomplete, Pending, UsersData, DeleteUser } = require("../controllers/admin")
const { authorize } = require("../middleware/auth")

// http://localhost:8000/admin/complete
router.get("/complete",authorize, Complete)

// http://localhost:8000/admin/incomplete
router.get("/incomplete",authorize, Incomplete)

// http://localhost:8000/admin/pending
router.get("/pending",authorize, Pending)


router.get("/fetch-users", UsersData)

// http://localhost:8000/admin/delete_user/id
router.delete("/delete_user/:id", DeleteUser)

module.exports = router
