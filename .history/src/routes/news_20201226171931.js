const express = require('express');
const router = express.Router();

// Cấu hình news
const newsController  = require('../app/controllers/NewsController');
router.use('/', newsController.index);
router.use('/:slug', newsController.index);

module.exports = router;
