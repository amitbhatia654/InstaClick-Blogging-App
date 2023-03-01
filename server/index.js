const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
//app.use(express.urlencoded())
app.use(cors())
mongoose.set("strictQuery", true);
mongoose.connect('mongodb://127.0.0.1:27017/myApp',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, () => console.log('database Connected'))

const Manager = require('./Manager')


app.post('/register', Manager.registerUser)
app.post('/login', Manager.loginUser)

app.post('/posts', Manager.AddPost)
app.get('/posts', Manager.getPosts)
app.delete('/posts/:id', Manager.deletePosts)

app.listen(9000, () => console.log('listening on port 9000'))