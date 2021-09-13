const express = require('express');
const router = express.Router();

const siteController = require('../public/app/controller/SiteController')


router.use('/search', siteController.search)
router.use(['/', '/home'], siteController.index);


module.exports = router;