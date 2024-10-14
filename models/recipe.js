const mongoose = require('mongoose');
const  { Schema } = require('mongoose');

const Recipe = new Schema(
    {
        title: {type: String, required: true},
        cuisineType: {type: Schema.Types.ObjectId, ref: 'cuisineType', required: true},
        ingredients: [{type: String, required: true}],
        servings: {type: Number, required: true},
        difficulty: {type: String, enum: ['Easy', 'Medium', 'Hard'], default: 'Medium'},
        prepTime: {type: Number, required: true},
        cookTime: {type: Number, required: true}
    },
    {timestamps: true}
)

module.exports = mongoose.model('recipes', Recipe)