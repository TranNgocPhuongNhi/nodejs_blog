const { response } = require("express");

class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }
}