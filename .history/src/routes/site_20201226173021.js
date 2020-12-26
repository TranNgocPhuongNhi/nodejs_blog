const express = require('express');
const router = express.Router();

// Cấu hình tuyến đường cho news
const siteController  = require('../app/controllers/SiteController');
router.use('/seach', siteController.search);
router.use('/', newsController.home);

module.exports = router;
