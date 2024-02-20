const express = require('express');
const { studentDetailsController,getStudentDetailsController } = require('../controller/studentController');

// create route
const router = express.Router();

// CREATE STUDENT DATABASE || POST
router.post("/create-student-details",studentDetailsController)


// Get all user details
router.get("/get-all-student-details",getStudentDetailsController)


module.exports = router;