var resultadoModel = require("../models/resultadoModel");

function adicionar(req, res){
    var id_usuario = req.body.idUsuarioServer;
    var resultado = req.body.resultadoServer;

   resultadoModel.adicionar(id_usuario, resultado)
    .then(function(resultado){
        res.json(resultado)
    })
}

function listarResultadoMaisRecente(req, res) {
    var id_usuario = req.body.idUsuarioServer;

    resultadoModel.listarResultadoMaisRecente(id_usuario)
        .then(function(resultado) {
            res.json(resultado);
        })
}

function listarTodosResultadosRecentes(req, res) {
    var id_usuario = req.body.idUsuarioServer;

    resultadoModel.listarTodosResultadosRecentes(id_usuario)
        .then(function(resultado) {
            res.json(resultado);
        })
}

function ExibirDadosUsuarios(req, res) {
    resultadoModel.ExibirDadosUsuarios()
        .then(function(resultado) {
            res.json(resultado);
        })
}



module.exports = {
    adicionar,
    listarResultadoMaisRecente,
    listarTodosResultadosRecentes,
    ExibirDadosUsuarios
    
}