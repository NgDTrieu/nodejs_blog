const path = require('path');
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 8080

// app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));

// app.engine('hbs', engine({
//     extname: '.hbs'
// }));

app.set('views', './src/resources/views');
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('sample.ejs');

})

app.get('/news', (req, res) => {
    res.send("news");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})