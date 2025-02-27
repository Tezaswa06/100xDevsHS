const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:K8dRoTB7iM1B25zY@cluster0.6wv1t.mongodb.net/")

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed :Boolean
})

const todo = mongoose.model('todos',todoSchema);
module.exports = {
    todo
}