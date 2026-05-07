var respostaModelModel = require("../models/respostaModel");

function lista(res){
    respostaModel.listar()
    .then(function(resultado){
        res.json(resultado)
    })
}
