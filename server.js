const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');
const logger = require('morgan');


const cuisineTypeController = require('./controllers/cuisineTypeController');
const directionsController = require('./controllers/directionsController');
const recipeController = require('./controllers/recipeController');


const PORT = process.env.PORT || 3001;

const app = express();
app.use(logger('dev'))
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req, res) => res.send('This is our landing page!'))

app.get('/cuisineTypes', cuisineTypeController.getAllCuisineTypes)
app.get('/cuisineTypes/:id', cuisineTypeController.getCuisineTypeById)
app.post('/cuisineTypes', cuisineTypeController.createCuisineType)
app.put('/cuisineTypes/:id', cuisineTypeController.updateCuisineType)
app.delete('/cuisineTypes/:id', cuisineTypeController.deleteCuisineType)

app.get('/recipes', recipeController.getAllRecipes)
app.get('/recipes/:id', recipeController.getRecipeById)
app.post('/recipes', recipeController.createRecipe)
app.put('/recipes/:id', recipeController.updateRecipe)
app.delete('/recipes/:id', recipeController.deleteRecipe)

app.get('/directions', directionsController.getAllDirections)
app.get('/directions/:id', directionsController.getDirectionsById)
app.post('/directions', directionsController.createDirections)
app.put('/directions/:id', directionsController.updateDirections)
app.delete('/directions/:id', directionsController.deleteDirections)