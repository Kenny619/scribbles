let mongoose = require('mongoose');

let TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  tags: [Schema.Types.ObjectId],  
  owner: String, 
  startDate: Date, 
  endDate: Date, 
  routine: Boolean,
  status: String,
  parent: Schema.Types.ObjectId,
  attachment: [Schema.Types.Mixed],
  notes: [Schema.Types.ObjectId],
  pin: Boolean,
  created: Date,
  lastUpdated: { type: Date, default: Date.now },
  terminated: Date,
  missed: Number,
  updatedBy: String,
  terminatedBy: String
});

module.exports = mongoose.model('Task', TaskSchema);