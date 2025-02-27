const express = require("express")
const mongoose = require("mongoose")
const app = express()

app.use(express.json())

mongoose.connect("mongodb+srv://admin:K8dRoTB7iM1B25zY@cluster0.6wv1t.mongodb.net/userAppNew")

const User = mongoose.model('Users',{name : String , email : String , password : String});


user.save();