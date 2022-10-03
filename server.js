//jshint version:6
const express = require("express");
const bodyparser = require("body-parser");



const app = express();
app.use(bodyparser.urlencoded({extended: true}))

app.get("/", function(req, res){
  res.sendFile(__dirname + "/scheduling.html");


});

app.get("/Contact", function(req, res){
  res.sendFile(__dirname + "/Contact.html");
});

 app.post("/", function(req, res){
   var name = req.body.fname;
   console.log(fname);
 });




app.listen(3000, function(){
  console.log("server started on port 3000")
});
