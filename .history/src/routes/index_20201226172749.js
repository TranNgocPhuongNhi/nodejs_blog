const newsRouter = require('./news');
const homeRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);
    
    // app.post('/search', (req, res) => {
    //     res.send('');
    // });
}

module.exports = route;
