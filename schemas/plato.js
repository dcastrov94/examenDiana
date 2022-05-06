var mongoose = require("mongoose");

var platoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre : String,
    ingredientes : String,
    costo : String,
});

module.exports = mongoose.model("Plato", platoSchema, "Platos");