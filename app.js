// express web app instance
const express = require('express')

// parse request body to json
const body_parser = require('body-parser')

// for File IO
const path = require('path')

// for web routing
const web_route = require('./routes/web/home')

// make database available globally
global.expense_db = path.join(__dirname, '.data/expense_db.json');

const app = express();

// set the view engine for web routes
app.set('view engine', 'pug');

app.use('/css', express.static('public/css'))
app.use('/js', express.static('public/js'))

app.use('/', web_route); // web routes

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
