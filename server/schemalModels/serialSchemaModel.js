const mongoose = require('mongoose');

const serialSchema = mongoose.Schema({
    name: {type: String, required: [true, "Inter Your name"]},
    id: {type: Number, required: [true, "Inter Your Id"]},
    batch: {type: String, required: [true, "Inter Your name"]},
    depertment: {type: String, required: [true, "Inter Your depertment name"]},
    endClass: {type: String, required: [true, "Inter Your Id"]},
    serialAt: {type: Date, default: Date.now()},
    serialNo: {type: Number, required: [true, "Inter Your Id"]},

}, {versionKey: false});

module.exports = mongoose.model("Serial", serialSchema);


// {
//     "name" : "muntasir",
//     "batch" : "30",
//     "id" : "18",
//     "endClass" : "11:40 AM",
//     "depertment" : "cse"
// }