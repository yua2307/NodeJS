const express = require('express');
const router = express.Router();

const newsController = require('../public/app/controller/NewsControllers')


router.use('/:slug', newsController.show)
router.use('/', newsController.index);


module.exports = router;