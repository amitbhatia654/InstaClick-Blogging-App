const mongoose=require('mongoose')

const postSchema=new mongoose.Schema({
    title:String,
    location:String,
    userId:String,
    imageUrl:String,
    userName:String
    
})

const allPost= new mongoose.model('allpost',postSchema)

module.exports={allPost}


