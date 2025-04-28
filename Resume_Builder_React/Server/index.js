const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const RegisterModel = require('./models/Register');


const app = express();
app.use(express.json()); /// this will help to transfer the data from frontend to backend
app.use(cors())

const SECRET_KEY = 'your_secret_key_here';


mongoose.connect("mongodb://127.0.0.1:27017/Resume_builder");

app.post("/register", (req, res) => {

    const { email } = req.body;
    RegisterModel.findOne({ email: email })
        .then(existingUser => {
            if (existingUser) {
                res.json("user Already exists")
            }
            else {

                RegisterModel.create(req.body)
                    .then(register => res.json(register))
                    .catch(err => res.json(err))
            }
        })

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



// Navbar route to get username
app.get('/navbar', (req, res) => {
    const token = req.headers.authorization; // frontend will send token in header
  
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
  
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      }
  
      // decoded.id has the user's MongoDB _id
      RegisterModel.findById(decoded.id)
        .then(user => {
          if (user) {
            res.json({ username: user.username });
          } else {
            res.json({ username: "" });
          }
        })
        .catch(err => res.json(err));
    });
  });


app.listen(3001, () => {
    console.log("server is running");
})