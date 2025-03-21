const path = require('path');
const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;



app.use(morgan('combined'));


//config temple engine
configViewEngine(app);

//Khai báo routes
app.use('/', webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})