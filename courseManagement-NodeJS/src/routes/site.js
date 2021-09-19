const express = require('express');
const router = express.Router();

const siteController = require('../app/controller/SiteController')


router.get('/search', siteController.search)
router.get(['/', '/home'], siteController.index);


module.exports = router;