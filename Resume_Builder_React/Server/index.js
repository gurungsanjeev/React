const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const RegisterModel = require('./models/Register');


const app = express();
app.use(express.json()); /// this will help to transfer the data from frontend to backend
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Resume_builder");

app.post("/register", (req, res) => {
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
                    res.json("success")
                }
                else {
                    res.json("password is incorrect")
                }
            }
            else {
                res.json("No record existed")
            }
        })
})



app.listen(3001, () => {
    console.log("server is running");
})