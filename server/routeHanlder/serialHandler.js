const Serial = require('../schemalModels/serialSchemaModel');
const express = require('express');
const router = express.Router();

router.get('/', async(req, res)=>{
    try{
        const result = await Serial.find({});
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message || "Faild to get serial list");
    }
});

router.post('/', async(req, res)=>{
    try{
        const result = await Serial.find({});
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message || "Faild to get serial list");
    }
});

module.exports = router;