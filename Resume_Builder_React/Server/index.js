const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const RegisterModel = require('./models/Register');
const bcrypt = require('bcrypt')/// for password bcrypt



const app = express();
app.use(express.json()); /// this will help to transfer the data from frontend to backend
app.use(cors())




mongoose.connect("mongodb://127.0.0.1:27017/Resume_builder");

app.post("/register", (req, res) => {


  const { email } = req.body;
  RegisterModel.findOne({ email: email })
    .then(existingUser => {
      if (existingUser) {
        res.json("user Already exists")
      }
      else {
        const { name, email, password } = req.body;
        bcrypt.hash(password, 10)
          .then(hash => {

            RegisterModel.create({ name, email, password: hash })
              .then(register => res.json(register))
              .catch(err => res.json(err))
          }).catch(err => console.log(err.message))

      }
    })

})

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  RegisterModel.findOne({ email: email })
    .then(user => {

      if (user) {
        bcrypt.compare(password, user.password, (err, response) => {
          if (response) {
            
            res.json("success")
          }
          if (err) {

            res.json("password is incorrect")
          }
          
      })
       
}
      else {
    res.json("No record existed")
  }
    })
})






app.listen(3001, () => {
  console.log("server is running");
})