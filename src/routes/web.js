const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('sample.ejs');

})

router.get('/news', (req, res) => {
    res.send("news");
})

module.exports = router;