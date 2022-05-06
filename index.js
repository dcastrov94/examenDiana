var path = require("path"); // Incluyo Path
var express = require("express"); // Incluyo Express
var app = express(); // Inicializo Express

var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://userexamen:user1357@cluster0.kfvkx.mongodb.net/Cluster0?retryWrites=true&w=majority");

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Asigno la carpeta definida a Express
app.use("/platos", require("./api/platos.js"));

app.listen(5000, function(){
    console.log("Servidor Corriendo");
}); // Levanto el servidor en el puerto 5000