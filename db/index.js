const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://jakemackbrown:SethTitus1@jakemackbrown.ntxtm.mongodb.net/recipeDatabase?retryWrites=true&w=majority&appName=JakeMackBrown')
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })



const db = mongoose.connection

module.exports = db