let mongoose = require('mongoose');

let TagSchema = new mongoose.Schema({
    name: String,
    color: String,
    created: Date,
    lastUpdated: { type: Date, default: Date.now },
    terminated: Date,
    updatedBy: String,
    terminatedBy: String  
});
    
module.exports = mongoose.model('Tag', TagSchema);