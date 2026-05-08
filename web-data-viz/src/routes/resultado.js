var express = require("express");
var router = express.Router();

var resultadoController = require("../controllers/resultadoController");

router.get("/", function (req, res) { resultadoController.lista(req, res) })

module.exports = router;