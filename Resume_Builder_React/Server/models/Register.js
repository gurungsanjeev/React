const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const RegisterModels = mongoose.model("register",RegisterSchema )

module.exports = RegisterModels