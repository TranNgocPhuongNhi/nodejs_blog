const express = require('express');
const router = express.Router();

// Cấu hình tuyến đường cho news
const siteController  = require('../app/controllers/SiteController');
router.use('/home', siteController.home);
router.use('/', newsController.index);

module.exports = router;
