const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    uid: {type: String, required: [true, "Inter Firabase UID"]},
    name: {type: String, required: [true, "Inter Your name"]},
    id: {type: Number, required: [true, "Inter Your Id"]},
    batch: {type: String, required: [true, "Inter Your name"]},
    department: {type: String, required: [true, "Inter Your department name"]},
}, {versionKey: false});

module.exports = mongoose.model("Student", studentSchema);

    // createdAt: {type: Date, default: Date.now()}

// {
//     "name" : "muntasir",
//     "uid" : "TAC8g9IkSag5m7Gy6wouaShD7YF2",
//     "batch" : "30",
//     "id" : "18",
// }