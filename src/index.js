// IMPORT EXPRESS PACKAGE( COMMOM JS SYNTEX )------
const express = require('express')
const mongoose = require('mongoose')
// INSTATIATE THE EXPRESS APP------
const app = express()
const bodyParser = require('body-parser');
//path for html----
const path = require('path');

const static_path = (path.join(__dirname, "../public"))
app.set('view engine', 'hbs');
app.use(express.static(static_path))


//Apis---

app.get("",(req,res) => {
    res.render("index.hbs")
})

app.get("/about",(req,res) => {
    res.render('about.hbs')
})

app.get("/weather",(req,res) => {
    res.render("weather.hbs")
})

app.post("/feedback",(req,res) => {
    res.render("about.hbs")
})

app.get("*",(req,res) => {
    res.render("404error")
})




// LISTEN FOR INCOMING REQUESTS-----
app.listen(process.env.PORT || 3000, function (){
    console.log('Express app running on port' + (process.env.PORT || 3000))
})