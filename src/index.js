
const path = require('path');
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

app.use(morgan('combined'));

app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home');
    //res.render("hello world");
})

app.get('/news', (req, res) => {
    res.render('news');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})