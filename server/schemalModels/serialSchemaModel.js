const mongoose = require('mongoose');

const serialSchema = mongoose.Schema({
    name: {type: String, required: [true, "Inter Your name"]},
    batch: {type: String, required: [true, "Inter Your name"]},
    id: {type: Number, required: [true, "Inter Your Id"]},
    endClass: {type: String, required: [true, "Inter Your Id"]},
    serialAt: {type: Date, default: Date.now()},
    serialNo: {type: Number, required: [true, "Inter Your Id"]},

}, {versionKey: false});

module.exports = mongoose.model("Serial", serialSchema);

    // createdAt: {type: Date, default: Date.now()}

// {
//     "name" : "muntasir",
//     "batch" : "30",
//     "id" : "18",
//     "endClass" : "11:40 AM",
//     "serialNo" : "12"
// }