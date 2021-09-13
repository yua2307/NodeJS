const path = require('path');
const express = require("express");
const app = express();
const port = 3000;
const morgan = require('morgan');
//const newsController = require('./NewsController')
//const handlebars = require('express-handlebars');
const exphbs = require('express-handlebars');
const route = require('./routes');
// HTTP logger
//app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));
// middle ware 
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

//  template engine
app.engine('.hbs', exphbs({
  extname: '.hbs',
}));
app.set('view engine', '.hbs');

app.set('views', path.join(__dirname, 'resources/views'));
// route init
route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
