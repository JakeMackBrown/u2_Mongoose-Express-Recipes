const db = require('../db');
const mongoose = require('mongoose');
const Direction = require('../models/direction');
const Recipe = require('../models/recipe');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    try {
        const carbonara = await Recipe.findOne({ title: 'Spaghetti Carbonara' });
        const enchiladas = await Recipe.findOne({ title: 'Chicken Enchiladas' });
        const sushi = await Recipe.findOne({ title: 'Sushi Rolls' });

        const directions = [
            {
                stepNumber: 1,
                description: 'Boil the spaghetti until al dente.',
                recipe: carbonara._id,
                duration: 10
            },
            {
                stepNumber: 2,
                description: 'Fry the pancetta in a pan.',
                recipe: carbonara._id,
                duration: 5
            },
            {
                stepNumber: 1,
                description: 'Preheat oven to 350°F and cook the chicken.',
                recipe: enchiladas._id,
                duration: 20
            },
            {
                stepNumber: 2,
                description: 'Assemble the enchiladas and cover with sauce.',
                recipe: enchiladas._id,
                duration: 10
            },
            {
                stepNumber: 1,
                description: 'Prepare the sushi rice.',
                recipe: sushi._id,
                duration: 40
            },
            {
                stepNumber: 2,
                description: 'Roll the sushi with nori and fillings.',
                recipe: sushi._id,
                duration: 10
            }
        ];

        await Direction.insertMany(directions);
        console.log('Directions seeded!');
        mongoose.connection.close();
    } catch (err) {
        console.log(err);
    }
}

const run = async () => {
    await main();
    db.close(); 
}

run()