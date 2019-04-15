var express = require("express");
var app     = express();
var http = require('http');
var path    = require("path");
var bodyParser = require("body-parser");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

//Data from DB
var dataFromDb = "";
//DB connection and getting Data
var connectDB = function(url){
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("EventManagementDb");
    dbo.collection("EventManagementCollectionAdmin").findOne({}, function(err, result) {
      if (err) throw err;
      dataFromDb = result;
      db.close();
    });
  });
}

connectDB("mongodb://localhost:27017/");
//pushing data to api
app.get('/api/connections/',function(req,res){
  res.header("Access-Control-Allow-Origin", "*");
	//connection.find({City_Category:"A"}).then(cityCountA => {res.json({cityCountA:cityCountA});})
	res.json({  
		dataFromDb
		})
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/index',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/BlackFridayAnalysis',function(req,res){
  res.sendFile(path.join(__dirname+'/BlackFridayAnalysis.html'));
});


app.listen(8080);