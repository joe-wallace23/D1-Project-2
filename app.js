//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req,res){
    res.render("home")
    });
app.get("/menu", function(req,res){
        res.render("menu")
});
app.get("/rewards", function(req,res){
    res.render("rewards")
});
app.get("/contact", function(req,res){
    res.render("contact")
});
//TODO

app.listen(process.env.PORT || 3000,function(){
  console.log("Server has started Successfully")
});