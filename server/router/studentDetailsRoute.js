const express = require('express');
const { studentDetailsController } = require('../controller/studentController');

// create route
const router = express.Router();

// CREATE STUDENT DATABASE || POST
router.post("/create-student-details",studentDetailsController)


module.exports = router;