const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name: {type: String, required: [true, "Inter Your name"]},
    uid: {type: String, required: [true, "Inter Firabase UID"]},
    batch: {type: String, required: [true, "Inter Your name"]},
    id: {type: Number, required: [true, "Inter Your Id"]},
}, {versionKey: false});

module.exports = mongoose.model("Student", studentSchema);

    // createdAt: {type: Date, default: Date.now()}

// {
//     "name" : "muntasir",
//     "uid" : "TAC8g9IkSag5m7Gy6wouaShD7YF2",
//     "batch" : "30",
//     "id" : "18",
// }