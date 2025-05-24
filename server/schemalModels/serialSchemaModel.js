const mongoose = require('mongoose');

const serialSchemalModel = mongoose.Schema({
    name: {type: String, required: [true, "Inter Your name"]},
    batch: {type: String, required: [true, "Inter Your name"]},
    id: {type: Number, required: [true, "Inter Your Id"]},
    endClass: {type: String, required: [true, "Inter Your Id"]},
    serialAt: {type: String, required: [true, "Inter Your Id"]},
    serialNo: {type: Number, required: [true, "Inter Your Id"]},

}, {versionKey: false});

module.exports = mongoose.model("Serial", serialSchemalModel);


// {
//     "name" : "muntasir",
//     "batch" : "30",
//     "id" : "18",
//     "endClass" : "11:40 AM",
//     "serialAt" : "11:50 AM",
//     "serialNo" : "12"
// }