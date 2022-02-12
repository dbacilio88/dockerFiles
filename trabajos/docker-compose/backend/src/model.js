const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personaSchema = new Schema({

    nombre: { type: String },
    apellido: { type: String }

});
const model = mongoose.model('persona', personaSchema);
module.exports = model;