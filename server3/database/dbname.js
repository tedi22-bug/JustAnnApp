var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "http://localhost:4000/tedy/mydb";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    console.log("Database created!");
    db.close();
});
