const mongoose=require('mongoose')

const postSchema=new mongoose.Schema({
    title:String,
    blog:String,
    location:String
})

const allPost= new mongoose.model('allpost',postSchema)

module.exports={allPost}


