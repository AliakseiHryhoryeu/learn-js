const { Schema, model } = require("mongoose")


const movieSchema = new Schema({
    name: { type: String, required: true },
    genre: { type: String, required: true },
    director: { type: String, required: true }

})


module.exports = model('movies', movieSchema)