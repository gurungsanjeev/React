const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RegisterModel = require('./models/Register')


const app = express();
// transfering the data from front end to backend in the form of json
app.use(express.json());
app.use(cors());


mongoose.connect("mongodb://127.0.0.1:27017/Facebook_data");


app.post('/signup', (req, res) => {
    RegisterModel.create(req.body)
        .then(register => res.json(register))
        .catch(err => res.json(err))

})


app.post('/login', (req, res) => {
    const { email, password } = req.body;
    RegisterModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                } else {
                    res.json("the password is incorrect")
                }
            }
            else{
                res.json("No record Found")
            }
        })
})


app.listen(3001, () => {
    console.log("server is runninng")
})