const { Schema, model } = require("mongoose")


const movieSchema = new Schema({
    name: { type: String, required: true },
    genre: { type: String, required: true },
    director: { type: String, required: true },
    rate:{type:Number,required:true},
    watched:{type:Boolean,required:false,default:false}

})


module.exports = model('movies', movieSchema)