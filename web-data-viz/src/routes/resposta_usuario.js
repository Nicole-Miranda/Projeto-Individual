var express = require("express");
var router = express.Router();

var resposta_usuarioController = require("../controllers/resposta_usuarioController");

router.get("/",(res)=>{resposta_usuarioController.lista(res)})