const express = require('express');
const router = express.Router();

// Cau hinh news
const NewsController  = require('../app/controllers/NewsController');
NewsController.index;

module.exports = router;
