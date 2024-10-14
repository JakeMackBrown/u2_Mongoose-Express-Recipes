const db = require('../db');
const mongoose = require('mongoose');
const Recipe = require('../models/recipe');
const cuisineType = require('../models/cuisineType');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    try {
        const italian = await cuisineType.findOne({ name: 'Italian' });
        const mexican = await cuisineType.findOne({ name: 'Mexican' });
        const japanese = await cuisineType.findOne({ name: 'Japanese' });

        const recipes = [
            {
                title: 'Spaghetti Carbonara',
                cuisineType: italian._id,
                ingredients: ['Spaghetti', 'Eggs', 'Pecorino Cheese', 'Pancetta'],
                servings: 4,
                difficulty: 'Medium',
                prepTime: 15,
                cookTime: 20
            },
            {
                title: 'Chicken Enchiladas',
                cuisineType: mexican._id,
                ingredients: ['Tortillas', 'Chicken', 'Cheese', 'Enchilada Sauce'],
                servings: 6,
                difficulty: 'Easy',
                prepTime: 20,
                cookTime: 30
            },
            {
                title: 'Sushi Rolls',
                cuisineType: japanese._id,
                ingredients: ['Sushi Rice', 'Nori', 'Fish', 'Soy Sauce'],
                servings: 2,
                difficulty: 'Hard',
                prepTime: 40,
                cookTime: 0
            }
        ];

        await Recipe.insertMany(recipes);
        console.log('Recipes seeded!');
        mongoose.connection.close();
    } catch (err) {
        console.log(err);
    }
}

const run = async () => {
    await main();
    db.close();  
};

run()