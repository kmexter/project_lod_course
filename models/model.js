const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    key: {
        required: true,
        type: String
    },
    attribute: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)