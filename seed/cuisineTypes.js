const db = require('../db');
const mongoose = require('mongoose');
const cuisineType = require('../models/cuisineType');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const main = async () => {
    const cuisineTypes = [
        {
        name: 'Italian',
        origin: 'Italy',
        popularity: 10,
        description: 'Italian cuisine is known for pasta, pizza, and a variety of cheeses.'
        },
        {
        name: 'Mexican',
        origin: 'Mexico',
        popularity: 9,
        description: 'Mexican cuisine includes tacos, enchiladas, and a rich array of spices.'
        },
        {
        name: 'Japanese',
        origin: 'Japan',
        popularity: 8,
        description: 'Japanese cuisine is famed for sushi, sashimi, and umami-rich dishes.'
        }
    ]

    await cuisineType.insertMany(cuisineTypes);
    console.log('Created some cuisine types!');
}

const run = async () => {
    await main();
    db.close();  
};

run()