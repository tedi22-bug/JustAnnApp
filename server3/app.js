const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Post = require('./models/post');
const MongoClient = require('mongodb').MongoClient; 


//Import routes
const postRoute = require('./routes/routes');

app.use('/tedy', postRoute); 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/tedy', (req, res) => {
    res.send('yey');
});


const PORT = process.env.PORT || 5000;

//Connect to DB

let uri = "mongodb+srv://teddy_22:teddy_222000@cluster0.xvpy0.mongodb.net/postsdb?retryWrites=true&w=majority";
mongoose.connect("mongodb+srv://teddy_22:teddy_222000@cluster0.xvpy0.mongodb.net/postsdb?retryWrites=true&w=majority");
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

//mongoose sandbox

app.post('/tedy/save', (req, res) => {
    console.log(req.body);
    const post = new Post(req.body);

    post.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
})


//Listening to the server

app.listen(4000);



