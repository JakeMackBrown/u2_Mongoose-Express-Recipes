const mongoose = require('mongoose');
const  { Schema } = require('mongoose');

const cuisineType = new Schema(
    {
        name: {type: String, required: true},
        origin: {type: String, required: true},
        description: {type: String, required: true}
    },
    { timestamps: true}
);

module.exports = mongoose.model('cuisineTypes', cuisineType)