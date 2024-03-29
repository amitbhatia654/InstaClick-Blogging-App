const { allPost } = require('./ModelsAndSchema/PostModel')
const { user } = require('../server/ModelsAndSchema/Register')

const registerUser = async (req, res) => {
    try {
        const { name, email, age, phone, password, city } = req.body

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
    catch (err) {
        console.log(err)
    }
}

const loginUser = async (req, res) => {
    const details = await user.findOne({ email: req.body.email })
    if (details) {
        if (req.body.password === details.password) {
            res.send({ message: "user Found", data: details })
        }
        else {
            res.send('Email or PassWord not match!')
        }
    }
    else {
        res.send('Email or PassWord not match!')
    }
}


const AddPost = async (req, res) => {
    try {
        const data = await new allPost({
            title: req.body.title,
            location: req.body.location,
            userId: req.body.userId,
            imageUrl: req.file.path,
            userName: req.body.userName
        }).save()

        res.send("Blog Added Succesfully")
    }

    catch (err) {
        console.log(err)
    }
}

const getPosts = async (req, res) => {
    const userId = req.params.userId
    try {
        const result = await allPost.find()
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

const getMyPosts = async (req, res) => {
    try {
        const result = await allPost.find({ userId: req.params.userId })
        res.send(result)
    }

    catch (err) {
        console.log(err)
    }
}

module.exports = {
    AddPost,
    getPosts,
    deletePosts,
    registerUser,
    loginUser,
    getMyPosts
}