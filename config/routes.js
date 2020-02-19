const express = require('express')
const router = express.Router()




const weatherController = require('../controllers/weatherController')


//router.post('/weather', weatherController.create)
 router.get('/weather',weatherController.list)





module.exports = router