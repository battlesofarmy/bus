require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');

// Use Middleware
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("Successfully Connected to Database"))
.catch((err)=> console.log(err))



const serialHandler = require('./routeHanlder/serialHandler');
const studentHandler = require('./routeHanlder/studentHandler');
app.use('/serial', serialHandler);
app.use('/student', studentHandler);


app.get('/', (req, res)=>{
    res.send('Hello');
    console.log('World');
})

app.listen(4000, ()=>{
   console.log('Server is Running in Port: ', port);
});