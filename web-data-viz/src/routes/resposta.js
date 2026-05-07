var express = require("express");
var router = express.Router();

var respostaController = require("../controllers/respostaController");

router.get("/",(res)=>{respostaController.lista(res)})