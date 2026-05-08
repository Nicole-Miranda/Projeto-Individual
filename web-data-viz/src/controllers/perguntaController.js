var perguntaModel = require("../models/perguntaModel");

function lista(req, res){
    perguntaModel.listar()
    .then(function(resultado){
        res.json(resultado)
    })
}

