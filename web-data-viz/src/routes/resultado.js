var express = require("express");
var router = express.Router();

var resultadoController = require("../controllers/resultadoController");

router.get("/listar", function (req, res) { resultadoController.adicionar(req, res) })
router.post("/listarResultadoMaisRecente", function (req, res) { resultadoController.listarResultadoMaisRecente(req, res) })
router.get("/listarTodosResultadosRecentes", function (req, res) { resultadoController.listarTodosResultadosRecentes(req, res) })

module.exports = router;