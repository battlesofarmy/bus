const Student = require('../schemalModels/studentSchemaModel');
const express = require('express');
const router = express.Router();

router.get('/', async(req, res)=>{
    try{
        const result = await Student.find({});
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message || "Faild to get serial list");
    }
});

router.get('/:uid', async(req, res)=>{
    const { uid } = req.params;
    try{
        const result = await Student.findOne({ uid });
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message || "Faild to get serial list");
    }
});

router.post('/', async(req, res)=>{
    try{
        const result = await Student(req.body).save();
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message || "Faild to get serial list");
    }
});


router.delete('/', async(req, res)=>{
    try{
        const result = await Student.deleteMany({});
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message || "Faild to get serial list");
    }
});

module.exports = router;