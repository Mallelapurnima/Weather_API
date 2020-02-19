const express=require('express')
const router=express.router
const axios=require('axios')
const Weather =require('../models/weather')

module.exports.list= (req, res)=> {
    const name = req.query.name
    console.log(Weather,'weather')
    

    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=abc0f30369f79b67964bb7c942f8bed9`)
        .then(response => {
            const coord = response.data.coord
            const name = response.data.name
            // const weather=new Weather({city:response.data.name,coordinates:response.data.coord})
            // weather.save()
            // .then((weather)=>{
            //     res.json(weather)
            // })
            // .catch((err)=>{
            //     res.json(err)
            // })
        
            res.json({ coord, name })

        })
        .catch(err => console.log(err))
}


// module.exports.create=(req,res)=>{
//     const name = req.query.name
//     axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=abc0f30369f79b67964bb7c942f8bed9`)
//         .then(response => {
//             const coord = response.data.coord
//             const name = response.data.name
//             const weather=new Weather({city:response.data.name,coordinates:response.data.coord})
//             weather.save()
//             .then((weather)=>{
//                 res.json(weather)
//             })
//             .catch((err)=>{
//                 res.json(err)
//             })
        
//             res.json({ coord, name })

//         })
//         .catch(err => console.log(err))
// }

    

