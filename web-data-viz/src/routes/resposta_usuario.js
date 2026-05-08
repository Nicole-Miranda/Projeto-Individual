var express = require("express");
var router = express.Router();

var resposta_usuarioController = require("../controllers/resposta_usuarioController");

router.get("/", function (req, res) {resposta_usuarioController.lista(req, res)})

module.exports = router;