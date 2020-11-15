const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;
app.listen(port,function(){
  console.log("start server with port 3000");
});

app.get("/", function(req,res){
  // console.log("dirname is"+__dirname);
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
  console.log(req.body);
  console.log(req.body.num1);
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The result of the calculation is: "+ result);
});

app.get("/bmicalculator", function(req,res){
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(req,res){
  console.log(req.body);
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var result = (weight/(height*height)).toFixed(2);
  res.send("You BMI is: "+ result);
});
