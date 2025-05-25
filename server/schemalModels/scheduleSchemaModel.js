const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  courseCode: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true }
});

const daySchema = new mongoose.Schema({
  day: { type: String, required: true },
  classess: [classSchema]
});

const scheduleSchema = new mongoose.Schema({
  batch: { type: String, required: true },
  department: { type: String, required: true }, // fixed typo from "department"
  classTimes: [daySchema]
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;


// {
//   "batch": "30",
//   "department": "cse",
//   "classTimes": [
//     {
//       "day": "fri",
//       "classess": [
//         {
//           "courseCode": "DLD",
//           "from": "11:10",
//           "to": "12:00"
//         },
//         {
//           "courseCode": "Data",
//           "from": "12:00",
//           "to": "12:50"
//         }
//       ]
//     },
//     {
//       "day": "fri",
//       "classess": [
//         {
//           "courseCode": "DLD",
//           "from": "11:10",
//           "to": "12:00"
//         },
//         {
//           "courseCode": "Data",
//           "from": "12:00",
//           "to": "12:50"
//         }
//       ]
//     }
//   ]
// }
