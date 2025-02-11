const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const userSchema = new mongoose.Schema(
    {
        userName: String,
        userEmail:String,
        userNumber:Number,
        apptDate:String,
        apptTime:String
    }
)

const UserModel = mongoose.model("users", userSchema)

app.use(cors())
app.use(express.json())

const URL = 'mongodb+srv://vicky:devil@cluster0.rw560.mongodb.net/vk_dental?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(URL)
    .then(()=>console.log("DB Successfully Connected !!"))

app.post('/submit',(req,res)=>{
    UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.get('/get',(req,res)=>{
    UserModel.find({})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.get('/delete/:id',(req,res)=>{
    const id = req.params.id
    UserModel.findByIdAndDelete({_id:id})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.listen(3500,()=>{
    console.log("Server Is Running ...")
})