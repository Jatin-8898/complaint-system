var express = require('express');
var router  =  express.Router();


//HOME PAGE
router.get('/', (req,res,next)=>{
    res.render('index');
});

//REGISTER
router.get('/register', (req,res,next)=>{
    res.render('register');
});


module.exports = router;