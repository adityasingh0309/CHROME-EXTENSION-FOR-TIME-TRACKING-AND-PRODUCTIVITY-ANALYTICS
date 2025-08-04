const mongoose = require('mongoose');

const timeEntrySchema = new mongoose.Schema({
  userId: { type: String, required: true },
  domain: { type: String, required: true },
  timeSpent: { type: Number, required: true }, // time in milliseconds
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TimeEntry', timeEntrySchema);
