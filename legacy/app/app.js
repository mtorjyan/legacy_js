const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const path = require('path');

//Import routes

const postRoute = require('../routes/posts')
app.use('/posts', postRoute);

//Routes
app.get('/', (req, res) => res.send('Hello World!'));

//Listenign
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

mongoose.connect(
    "mongodb+srv://mtorjyan:password1234@cluster0-aikvh.mongodb.net/test?retryWrites=true&w=majority",
    {useNewUrlParser : true},
    ()=>{
        console.log('Connected')
    }
);