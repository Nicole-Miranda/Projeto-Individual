var respostaModelModel = require("../models/respostaModel");

function lista(req, res){
    respostaModel.listar()
    .then(function(resultado){
        res.json(resultado)
    })
}
