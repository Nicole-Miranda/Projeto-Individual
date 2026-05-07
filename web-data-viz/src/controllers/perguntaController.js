var perguntaModel = require("../models/perguntaModel");

function lista(res){
    perguntaModel.listar()
    .then(function(resultado){
        res.json(resultado)
    })
}

