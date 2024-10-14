const Direction = require('../models/direction');

const getAllDirections = async (req, res) => {
    try {
        const directions = await Direction.find()
        res.json(directions)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getDirectionsById = async (req, res) => {
    try {
        const { id } = req.params;
        const direction = await direction.findById(id)
        if (recipe) {
            return res.json(recipe);
        }
        return res.status(404).send('Direction with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createDirections = async (req, res) => {
    try {
        const direction = await new direction(req.body)
        await direction.save()
        return res.status(201).json({
            direction,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateDirections = async (req, res) => {
    try {
        let { id } = req.params;
        let direction = await direction.findByIdAndUpdate(id, req.body, { new: true })
        if (direction) {
            return res.status(200).json(type)
        }
        throw new Error("Directions not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteDirections = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await direction.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Directions deleted");
        }
        throw new Error("Directions not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllDirections,
    getDirectionsById,
    updateDirections,
    deleteDirections,
    createDirections
}