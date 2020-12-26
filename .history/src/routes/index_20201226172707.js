const newsRouter = require('./news');

function route(app) {
    // Lấy nội dung html từ home.hbs 
    // req = request, res = response
    app.get('/', (req, res) => {
        res.render('home');
    });
    
    app.use('/news', newsRouter);
    
    app.get('/search', (req, res) => {
        res.render('search');
    });
    
    // app.post('/search', (req, res) => {
    //     res.send('');
    // });
}

module.exports = route;
