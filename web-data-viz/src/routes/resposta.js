var express = require("express");
var router = express.Router();

var respostaController = require("../controllers/respostaController");

router.get("/", function (req, res) {respostaController.lista(req, res)})

module.exports = router;