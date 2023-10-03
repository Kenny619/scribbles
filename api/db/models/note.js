let mongoose = require('mongoose');

let NoteSchema = new mongoose.Schema({
  body: String,
  tags: [Schema.Types.ObjectId],  
  owner: String, 
  parent: Schema.Types.ObjectId,
  attachment: [Schema.Types.Mixed],
  pin: Boolean,
  created: Date,
  lastUpdated: { type: Date, default: Date.now },
  terminated: Date,
  missed: Number,
  updatedBy: String,
  terminatedBy: String
});

module.exports = mongoose.model('Note', NoteSchema);