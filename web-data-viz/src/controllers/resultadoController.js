var resultadoModelModel = require("../models/resultadoModel");

function lista(req, res){
    resultadoModel.listar()
    .then(function(resultado){
        res.json(resultado)
    })
}