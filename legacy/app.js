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


//Routes
app.get('/', (req, res) =>{

    // res.send('Hello World!')
    res.sendFile(__dirname + "/index.html");
});

app.post("/add_student", (request, response) => {
    collection.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});

//Listen
app.listen(3000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("students");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});

