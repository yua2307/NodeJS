const path = require('path');
const express = require("express");
const app = express();
const port = 3000;
const morgan = require('morgan');

const exphbs = require('express-handlebars');
const route = require('./routes');
// HTTP logger
// app.use(morgan('combined'));
//Database 
const db = require('./config/db')
// connect to DB 
db.connect();

// static file css and image
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

app.set('views', path.join(__dirname, 'resources', 'views'));
// route init
route(app);


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
