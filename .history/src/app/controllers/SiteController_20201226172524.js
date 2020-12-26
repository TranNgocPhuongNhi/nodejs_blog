const { response } = require("express");

class SiteController {
    // [GET] /home
    home(req, res) {
        res.render('news');
    }

    // [GET] /search
    search(req, res) {
        res.send('NEW DETAIL');
    }
}

module.exports = new SiteController;