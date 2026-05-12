var resultadoModel = require("../models/resultadoModel");

function adicionar(req, res){
   resultadoModel.adicionar()
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


module.exports = {
    adicionar,
    listarResultadoMaisRecente
}