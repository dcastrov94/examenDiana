var express =require("express");
var router=express.Router();
var mongoose = require("mongoose");
var formidable = require('formidable');
const fs = require("fs");
const passport = require('passport');

var Plato = require("../schemas/plato.js");

router.get('/', function(req, res) {
    Plato.find().exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });

  router.post('/insertar', function (req, res) {
    var platoNuevo = new Plato({
      _id: new mongoose.Types.ObjectId(),
      nombre: req.body.nombre,
      ingredientes: req.body.ingredientes,
      costo: req.body.costo,
    });
  
    platoNuevo.save()
      .then(
        function (result) {
          res.json(result);
        }
      );
  });

  router.post('/crear', function (req, res) {
    var form = new formidable.IncomingForm();
    var _id = new mongoose.Types.ObjectId();
    form.parse(req, function (err, fields, files) {
  
      var platoNuevo = new Plato({
        _id: _id,
        nombre: fields.nombre,
        ingredientes: fields.ingredientes,
        costo: fields.costo,
      })
  
      platoNuevo.save()
    });
    return res.redirect('../registrar.html');
  });

module.exports=router;