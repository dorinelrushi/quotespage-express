const express = require("express");
const path = require('path');
const bodyParser = require("body-parser")
const app = express();

app.set('view engine',"ejs");
app.set("views",path.join(__dirname ,"views"))

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/static",express.static("static"))

app.use("/",require("./routes/routes"))

app.listen(3000,()=>{
    console.log("server on port 3000")
})