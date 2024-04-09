const express = require('express');
const mongoose = require('mongoose');

const app = express();


app.get('/', (req,res) => {
    res.send("Hello there app is at Vercal Hello!")
    console.log('It Works');
})

mongoose.connect('mongodb+srv://nikola:Password@1@cluster0.l1s2jdh.mongodb.net')
    .then(()=> console.log("MongoDb connected"))
    .catch(err => console.log(err))



const PORT = 9003;

app.listen(PORT, () => {
    console.log(`Server is Running is http://localhost:${PORT}`)
});