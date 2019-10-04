const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const path = require('path');

const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const CONNECTION_URL = "mongodb+srv://mtorjyan:password1234@cluster0-aikvh.mongodb.net/admin?retryWrites=true&w=majority";
const DATABASE_NAME = "legacy";



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Import routes

const postRoute = require('./routes/posts')
app.use('/posts', postRoute);
// const addRoute = require('./routes/add')
// app.use('/add', addRoute)


//Routes
app.get('/', (req, res) =>{

    // res.send('Hello World!')
    res.sendFile(__dirname + "/index.html");
});

// app.post

app.get('/get_student/:user_id', (req, res) => {  

    console.log("HERE " + req.params.user_id)
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        this.database = client.db(DATABASE_NAME);
        this.collection = this.database.collection("students");
        console.log("Connected to `" + DATABASE_NAME + "`!");
        this.collection.find({firstName: req.params.user_id}).toArray(function(err, items) {
            console.log(items);
            res.send(items);
        });
        client.close();
    });
});

//Listen
app.listen(3000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        console.log("Connected to `" + DATABASE_NAME + "`!");
        this.database = client.db(DATABASE_NAME);
        this.collection = this.database.collection("students");
        client.close();
    });
});

