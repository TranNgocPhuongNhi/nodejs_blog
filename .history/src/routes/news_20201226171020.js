const express = require('express');
const router = express.Router();

// Cấu hình news
const NewsController  = require('../app/controllers/NewsController');
NewsController.index;

module.exports = router;
