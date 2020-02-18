const mongoose=require('mongoose')


const Schema=mongoose.Schema
const weatherSchema=new Schema({
    city:{
        type:String,
        required:true
    },
    coordinates:[{
        
        long:{
            type:String,
            required:true
        },

        lat:{
            type:String,
            required:true

        }
    }]
})

    
const Weather=mongoose.model('Weather',weatherSchema)
module.exports=Weather