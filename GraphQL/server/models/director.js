const { Schema, model } = require("mongoose")


const directorSchema = new Schema({
    name: { type: String, required: true },
    age: { type: String, required: true },

})


module.exports = model('directors', directorSchema)