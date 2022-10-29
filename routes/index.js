const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

router.get('/', function(req, res) {
    // res.send('It works!');
    res.render('form', { title: 'Registration form' });
});

router.post('/', function(req, res) {
    console.log(req.body);
    res.render('form', { title: 'Registration form' });
})

module.exports = router;