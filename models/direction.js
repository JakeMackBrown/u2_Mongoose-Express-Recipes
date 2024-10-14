const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Direction = new Schema(
    {
        stepNumber: {type: Number, required: true},
        description: {type: String, required: true},
        recipe: {type: Schema.Types.ObjectId, ref: 'Recipe', required: true},
        duration: {type: Number}
    },
    { timestamps: true}
)

module.exports = mongoose.model('directions', Direction)