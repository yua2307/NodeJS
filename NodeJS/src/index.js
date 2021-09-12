const path = require('path');
const express = require("express");
const app = express();
const port = 3000;
const morgan = require('morgan');

//const handlebars = require('express-handlebars');
const exphbs = require('express-handlebars');

// HTTP logger
app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));
//  template engine
app.engine('.hbs', exphbs({
  extname: '.hbs',
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get(["/home", "/"], (req, res) => {
  return res.render('home');
})
app.get(["/news", "/"], (req, res) => {
  return res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
