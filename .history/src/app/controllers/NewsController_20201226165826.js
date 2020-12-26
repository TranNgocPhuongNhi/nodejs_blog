const { response } = require("express");

class NewsController {
    index(req, res) {
        res.render('news');
    }
}