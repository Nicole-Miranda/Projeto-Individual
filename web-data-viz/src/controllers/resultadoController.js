var resultadoModelModel = require("../models/resultadoModel");

function adicionar(req, res){
    resultadoModel.listar()
    .then(function(resultado){
        res.json(resultado)
    })
}