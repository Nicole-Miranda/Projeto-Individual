var express = require("express");
var router = express.Router();

var resultadoController = require("../controllers/resultadoController");

router.post("/adicionar", function (req, res) { resultadoController.adicionar(req, res) })

module.exports = router;