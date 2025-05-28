const mongoose = require('mongoose');

const serialSchema = mongoose.Schema({
    name: {type: String, required: [true, "Inter Your name"]},
    id: {type: Number, required: [true, "Inter Your Id"]},
    batch: {type: String, required: [true, "Inter Your name"]},
    department: {type: String, required: [true, "Inter Your department name"]},
    endClass: {type: String, required: [true, "Inter Your Id"]},
    serialNo: {type: Number, required: [true, "Inter Your Id"]},
    onTime: {type: Boolean, default: true},
    reason: {type: String},
    report: {type: String},
    serialAt: {type: String, required: [true, "Inter Current time"]},

}, {versionKey: false});

module.exports = mongoose.model("Serial", serialSchema);


// {
//     "name" : "muntasir",
//     "batch" : "30",
//     "id" : "18",
//     "endClass" : "11:40 AM",
//     "department" : "cse"
// }