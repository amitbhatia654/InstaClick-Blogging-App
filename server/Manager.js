const { allPost } = require('./ModelsAndSchema/PostModel')
const {user} =require('../server/ModelsAndSchema/Register')

const registerUser = async(req, res) => {
    try {
        const {name,email,age,phone,password,city} =req.body

         new user({
            name,
            email,
            phone,
            age,
            city,
            password
        }).save()

        res.send('User Registered SuccessFully')
    }
    catch(err) {
console.log(err)
    }
}

const AddPost = async (req, res) => {
    try {
        const data = await new allPost({
            title: req.body.title,
            blog: req.body.blog,
            location: req.body.location
        }).save()

        res.send("Blog Added Succesfully")
    }

    catch (err) {
        console.log(err)
    }
}

const getPosts = async (req, res) => {
    try {
        const result = await allPost.find({})
        res.send(result)
    }
    catch (error) {
        console.log(error)
    }
}

const deletePosts = async (req, res) => {
    try {
        const result = await allPost.findByIdAndDelete({ _id: req.params.id })
        res.send('it workdedd')
    }
    catch (error) {
        console.log(error)
    }
}



module.exports = {
    AddPost,
    getPosts,
    deletePosts,
    registerUser
}