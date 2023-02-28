const mongoose= require('mongoose')

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    city:String,
    age:Number,
    password:String
})

const user=mongoose.model('user' ,userSchema)

module.exports={user}