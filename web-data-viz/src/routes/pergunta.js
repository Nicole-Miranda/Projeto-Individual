var express = require("express");
var router = express.Router();

var perguntaController = require("../controllers/perguntaController");

router.get("/",(res)=>{perguntaController.lista(res)})