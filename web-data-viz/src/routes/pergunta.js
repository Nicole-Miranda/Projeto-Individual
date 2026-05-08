var express = require("express");
var router = express.Router();

var perguntaController = require("../controllers/perguntaController");

router.get("/", function (req, res) {perguntaController.lista(req, res)})

module.exports = router;