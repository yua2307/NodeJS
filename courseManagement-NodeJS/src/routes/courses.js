const express = require('express');
const router = express.Router();

const courseController = require('../app/controller/CourseController');
const { route } = require('./news');

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.post('/handle-form-action', courseController.handleFormAction);
router.post('/handle-form-trash-action', courseController.handleFormTrashAction);
router.get('/edit/:id', courseController.edit);
router.delete('/delete/:id', courseController.destroy); // soft delete
router.delete('/deleteForever/:id', courseController.deleteForever);
router.patch('/restore/:id', courseController.restore);

router.put('/editCourseHandler/:id', courseController.update);
router.get('/:slug', courseController.showDetail);
module.exports = router;