require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000;
const mongoose = require('mongoose');

// Use Middleware
app.use(cors());  
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("Successfully Connected to Database"))
.catch((err)=> console.log(err))
// .catch((err)=> console.log(err))



app.set('trust proxy', true); // <-- Important when behind a proxy (e.g., Vercel, Render)

// app.use(requestIp.mw());


// middlewares/ipFilter.ts
// import requestIp from 'request-ip';
const requestIp = require('request-ip')
// import { Request, Response, NextFunction } from 'express';
const { Request, Response, NextFunction } = require('express');

// List of allowed IPs or CIDR ranges
const allowedIPs = [
  '::1',              // localhost IPv6
  '127.0.0.1',        // localhost IPv4
  '103.153.110.45',     // home wifi
  '103.153.110.0/24',  // campus IP range,
  '36.255.80.243', // my airtel sim
  '36.255.80.0/24'
];

// import * as ipRangeCheck from 'ip-range-check';
// import * as ipRangeCheck from 'ip-range-check';
const ipRangeCheck = require('ip-range-check');

const restrictToCampus = (req, res, next) => {
  const clientIp = requestIp.getClientIp(req) || '';
  console.log(clientIp)

  if (ipRangeCheck(clientIp, allowedIPs)) {
    next();
  } else {
    return res.status(403).json({ message: 'Access restricted! Use Bus Network' });
  }
};


const serialHandler = require('./routeHanlder/serialHandler');
const studentHandler = require('./routeHanlder/studentHandler');
const scheduleHandler = require('./routeHanlder/scheduleHandler');
const currentTime = require('./utils/currentTime');

app.use('/serial', serialHandler);
app.use('/student', restrictToCampus, studentHandler);
app.use('/schedule', restrictToCampus, scheduleHandler);
app.use('/time', currentTime);


app.get('/', (req, res)=>{
    res.send('Hello');
    console.log('World');
})

app.listen(port, ()=>{
   console.log('Server is Running in Port: ', port);
});