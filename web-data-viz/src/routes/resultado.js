var express = require("express");
var router = express.Router();

var resultadoController = require("../controllers/resultadoController");

router.get("/",(res)=>{resultadoController.lista(res)})