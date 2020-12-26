function route(app) {
    // Lấy nội dung html từ home.hbs 
    // req = request, res = response
    app.get('/', (req, res) => {
        res.render('home');
    });
    
    // Lấy nội dung html từ news.hbs 
    app.get('/news', (req, res) => {
        res.render('news');
    });
    
    app.get('/search', (req, res) => {
        res.render('search');
    });
    
    app.post('/search', (req, res) => {
        res.send('');
    });
}

module.exports = route;
