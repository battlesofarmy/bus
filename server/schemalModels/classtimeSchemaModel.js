const mongoose = require('mongoose');

const serialSchema = mongoose.Schema({
    batch: {type: String, required: [true, "Inter Your name"]},
    depertment: {type: String, required: [true, "Inter Your depertment name"]},
    classTimes: 

}, {versionKey: false});

module.exports = mongoose.model("Serial", serialSchema);


{
    batch : "30",
    depertment : "cse",
    classTimes : [
        {
            day: "fri",
            classess: [
                {
                    name: "DLD",
                    from: "11:10",
                    to: "12:00"
                },{
                    name: "Data",
                    from: "12:00",
                    to: "12:50"
                }
            ]
        },{
            day: "mon",
            classess: [
                {
                    name: "DLD",
                    from: "11:10",
                    to: "12:00"
                },{
                    name: "Data",
                    from: "12:00",
                    to: "12:50"
                }
            ]
        }
    ]
}