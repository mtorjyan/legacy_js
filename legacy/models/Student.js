const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Student', StudentSchema)