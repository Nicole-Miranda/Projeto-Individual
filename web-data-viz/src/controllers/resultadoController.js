var resultadoModelModel = require("../models/resultadoModel");

function lista(res){
    resultadoModel.listar()
    .then(function(resultado){
        res.json(resultado)
    })
}