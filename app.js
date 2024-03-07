// express web app instance
const express = require('express')

// parse request body to json
const body_parser = require('body-parser')

// for File IO
const path = require('path')


// make database available globally
global.expense_db = path.join(__dirname, '.data/expense_db.json');

// for web routing
const web_route = require('./routes/web/home')
// routes
const api_route = require('./routes/api')

const app = express();

// set the view engine for web routes
app.set('view engine', 'pug');

app.use('/css', express.static('public/css'))
app.use('/js', express.static('public/js'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api_route); // API routes
app.use('/', web_route); // web routes

// redirect to home page if unknown requests requested
app.use((req, res) => {
    res.redirect('/');
});

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
