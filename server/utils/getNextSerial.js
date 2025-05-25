const Counter = require('../schemalModels/countSchemaModel');

async function getNextSerial(name = "busSerial") {
  const result = await Counter.findOneAndUpdate(
    { id: name },
    { $inc: { seq: 1 } },
    { new: true, upsert: true }
  );
  return result.seq;
}

module.exports = getNextSerial;