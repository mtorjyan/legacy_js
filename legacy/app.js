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

app.use(express.static('/css'));
app.use(express.static('/views'));
app.use(express.static("public"));
app.set('view engine', 'ejs')

//Import routes

// const postRoute = require('./routes/posts')
// app.use('/posts', postRoute);
// const addRoute = require('./routes/add')
// app.use('/add', addRoute)


//Routes
app.get('/', function(req, res){ 
    // res.sendFile(__dirname + '/views/index.html');
    res.send('hello')
});

// For account creation page
app.get('/create', function(req, res){ 
    // res.sendFile(__dirname + '/views/createAccount.html');
    res.sendFile(__dirname + "/css/" + "main.css");
    res.render('createAccount.ejs');
});

// For login page
app.get('/login', function(req, res){ 
    // res.sendFile(__dirname + '/views/createAccount.html');
    res.sendFile(__dirname + "/css/" + "main.css");
    res.render('login.ejs');
});

// app.post

app.get('/get_student/:user_id', (req, res) => {  
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


app.post("/add_student", (request, response) => {
    to_add = request.body;
    to_add["type"] = "0";
    this.collection.insertOne(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});

app.post("/add_instructor", (request, response) => {
    to_add = request.body;
    to_add["type"] = "1";
    this.collection.insert(to_add, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});

app.post("/login", (request, response) => {
    to_add = request.body;
    this.collection.insert(to_add, (error, result) => {
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
        console.log("Connected to `" + DATABASE_NAME + "`!");
        this.database = client.db(DATABASE_NAME);
        this.collection = this.database.collection("students");
    });
});

