const {connectToMongoDB} = require('../backend/config/db') 
const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, "public"))

connectToMongoDB()

app.use('',require('../backend/routes/api'))

app.listen('7860')