const Serial = require('../schemalModels/serialSchemaModel');
const express = require('express');
const getNextSerial = require('../utils/getNextSerial');
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
    const serialCounter = await getNextSerial();
    const { serialNo } = req.body;
    const data = { ...req.body, serialNo: serialCounter};
    console.log(req.body)

    try{
        const result = await Serial(data).save();
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message || "Faild to get serial list");
    }
});


router.post('/report/:id', async(req, res)=>{
    const { id } = req.params;
    
    try{
        const result = await Serial.findOneAndUpdate(
        { _id: id },
        { $push: { reports: req.body.report } },
        { new: true }
        );
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message || "Faild to get serial list");
    }
});

router.delete('/', async(req, res)=>{
    try{
        const result = await Serial.deleteMany({});
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message || "Faild to get serial list");
    }
});

module.exports = router;