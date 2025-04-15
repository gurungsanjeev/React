const mongoose = require ('mongoose')


const RegisterSchema = new mongoose.Schema({
    fname: String,
    lname : String,
    email: String,
    password : String,
    gender : String,
    birthMonth: String,
    birthDay: String,
    birthYear : String,

})

const RegisterModel = mongoose.model("Register", RegisterSchema);
module.exports = RegisterModel;