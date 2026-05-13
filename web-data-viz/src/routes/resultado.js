var express = require("express");
var router = express.Router();

var resultadoController = require("../controllers/resultadoController");

router.post("/adicionar", function (req, res) { resultadoController.adicionar(req, res) })
router.post("/listarResultadoMaisRecente", function (req, res) { resultadoController.listarResultadoMaisRecente(req, res) })
router.post("/listarTodosResultadosRecentes", function (req, res) { resultadoController.listarTodosResultadosRecentes(req, res) })
router.get("/ExibirDadosUsuarios", function (req, res) { resultadoController.ExibirDadosUsuarios(req, res) })

module.exports = router;