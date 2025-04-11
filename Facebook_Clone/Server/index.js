const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
// transfering the data from front end to backend in the form of json
app.use(express.json());
app.use(cors());


app.listen(3001, ()=>{
    console.log("server is runninng")
})