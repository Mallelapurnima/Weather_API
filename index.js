const express = require('express')
const axios = require('axios')
const port = 3010
const mongoose = require('./config/database')
const router=require('./config/routes')
const Weather =require('./models/weather')
 

const app = express()

app.use(express.json())
app.use('/',router)
app.set('view engine','ejs')
app.get('/city', function (req, res) {
    const name = req.query.name

    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=abc0f30369f79b67964bb7c942f8bed9`)
        .then(response => {
            const coord = response.data.coord
            const name = response.data.name
            res.json({ coord, name })
        })
        .catch(err => console.log(err))
})



app.listen(port, function () {
    console.log('listening on port ', port)
})

