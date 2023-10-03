let mongoose = require('mongoose');

let HolidaySchema = new mongoose.Schema({
    name: String,
    date: Date,
    countrycode: String,
    
});
    
module.exports = mongoose.model('Holiday', HolidaySchema);