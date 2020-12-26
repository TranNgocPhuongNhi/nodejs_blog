const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

// Sử dụng middleware
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route();


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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});