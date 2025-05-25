const Schedule = require('../schemalModels/scheduleSchemaModel');
const express = require('express');
const getNextSerial = require('../utils/getNextSerial');
const router = express.Router();

router.get('/all', async(req, res)=>{
    try{
        const result = await Schedule.find({});
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message || "Faild to get serial list");
    }
});

router.get('/', async(req, res)=>{
    const { batch, department } = req.query;
    console.log(batch, department);
    try{
        const result = await Schedule.findOne({batch});
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message || "Faild to get serial list");
    }
});

router.post('/', async(req, res)=>{
    console.log("schedule hiting")
    const data = req.body;
    try{
        const result = await Schedule(data).save();
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message || "Faild to get serial list");
    }
});


router.delete('/', async(req, res)=>{
    try{
        const result = await Schedule.deleteMany({});
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message || "Faild to get serial list");
    }
}); 

module.exports = router;



// [
//   {
//     "batch": "30",
//     "department": "cse",
//     "classTimes": [
//       {
//         "day": "sun",
//         "classess": [
//           {
//             "courseCode": "DLD",
//             "from": "11:10",
//             "to": "12:00",
//           },
//           {
//             "courseCode": "Data",
//             "from": "12:00",
//             "to": "12:50",
//           },
//           {
//             "courseCode": "math",
//             "from": "12:50",
//             "to": "01:40",
//           }
//         ],
//       },
//       {
//         "day": "fri",
//         "classess": [
//           {
//             "courseCode": "DLD",
//             "from": "11:10",
//             "to": "12:00",
//           },
//           {
//             "courseCode": "Data",
//             "from": "12:00",
//             "to": "12:50",
//           }
//         ],
//       }
//     ],
//   }
// ]