const Recipe = require('../models/recipe');

const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find()
        res.json(recipes)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getRecipeById = async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await recipe.findById(id)
        if (recipe) {
            return res.json(recipe);
        }
        return res.status(404).send('Recipe with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createRecipe = async (req, res) => {
    try {
        const recipe = await new recipe(req.body)
        await recipe.save()
        return res.status(201).json({
            recipe,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateRecipe = async (req, res) => {
    try {
        let { id } = req.params;
        let recipe = await recipe.findByIdAndUpdate(id, req.body, { new: true })
        if (recipe) {
            return res.status(200).json(type)
        }
        throw new Error("Recipe not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await recipe.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Recipe deleted");
        }
        throw new Error("Recipe not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe,
    createRecipe
}