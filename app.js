var express = require("express"),
    bodyParser = require("body-parser"),
    app = express();
    
app.use(bodyParser.urlencoded({extended: true}));    
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
   res.render("index");
});   


app.get("/menu", function(req, res){
  res.render("menu");  
});


app.get("/hours", function(req, res){
  res.render("hours");  
});
    
    
app.get("/location", function(req, res){
  res.render("location");  
});
    
    
app.get("/catering", function(req, res){
  res.render("catering");  
});
    
    




app.listen(process.env.PORT, process.env.IP, function(req, res){
    console.log("Server Has Started!"); 
});
