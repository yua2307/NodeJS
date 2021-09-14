const express = require('express');
const router = express.Router();

const meController = require('../app/controller/MeController');

router.get('/storedCourses', meController.storedCourses);


module.exports = router;