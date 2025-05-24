const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// Use Middleware
app.use(cors());
app.use(express.json());


const serialHandler = require('./routeHanlder/serialHandler');
app.use('/serial', serialHandler);


app.get('/', (req, res)=>{
    res.send('Hello');
    console.log('World');
})

app.listen(port, ()=>{
   console.log('Server is Running in Port: ', port);
});