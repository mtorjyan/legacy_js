const express = require('express');
const router = express.Router();
const Student = require('../models/Student')

router.get('/' ,(req, res)=>{
    res.send('We are on posts');
});

router.post('/', (req, res) => {
    console.log(req.body);
});

module.exports = router;