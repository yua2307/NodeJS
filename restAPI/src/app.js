const express = require('express');

const app = express();
const port = 8080;
const route = require("./routes");
const bodyParser = require('body-parser');
const corsHelper = require('../src/app/helper/corsHelper');

// application/json
app.use(bodyParser.json());

app.use(corsHelper)

// init route
route(app)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});