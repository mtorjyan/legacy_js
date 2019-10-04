const express = require('express');
const router = express.Router();
const Student = require('../models/Student')
const app = express();
router.get('/' ,(req, res)=>{
    res.send('We are on posts');
});

// router.post('/', (req, res) => {

//     // const student = new Student({
//     //     name: req.body.name
//     // });
    
    
//     var student = new Student(req.body);
//     console.log("IN HERE0 " + student.name)
//     const MongoClient = require('mongodb').MongoClient;
//     const uri = "mongodb+srv://mtorjyan:password1234@cluster0-aikvh.mongodb.net/admin?retryWrites=true&w=majority";
//     const client = new MongoClient(uri, { useNewUrlParser: true });
//     client.connect(err => {
//         console.log('Connected')
//         // const collection = client.db("test").collection("devices");
//         // perform actions on the collection object
        
//         student.save()
//         .then(item => {
//             res.send("item saved to database");
//         })
//         .catch(err => {
//             res.status(400).send("unable to save to database");
//         });
//         client.close();
//     });
    
   
// });

app.post("/posts", (request, response) => {
    collection.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});



module.exports = router;