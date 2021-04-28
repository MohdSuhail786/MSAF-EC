const {connectToMongoDB} = require('./config/db') 
const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'build')))
//app.set('view engine', 'ejs')
//app.set("views", path.join(__dirname, "public"))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

connectToMongoDB()

app.use('',require('./routes/api'))
app.listen('3000')
