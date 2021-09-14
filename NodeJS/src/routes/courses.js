const express = require('express');
const router = express.Router();

const courseController = require('../app/controller/CourseController');
const { route } = require('./news');

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/edit/:id', courseController.edit);
router.delete('/delete/:id', courseController.destroy);
router.put('/editCourseHandler/:id', courseController.update);
router.get('/:slug', courseController.showDetail);


module.exports = router;