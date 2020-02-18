const express = require('express')
const axios = require('axios')
const port = 3010
const mongoose = require('./config/database')
const router=require('./config/routes')
const Weather =require('./models/weather')


const app = express()

app.use(express.json())
app.use('/',router)

app.listen(port, function () {
    console.log('listening on port ', port)
})

