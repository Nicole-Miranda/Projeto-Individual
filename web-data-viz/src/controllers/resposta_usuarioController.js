var resposta_usuarioModel = require("../models/resposta_usuarioModel");

function lista(res){
    resposta_usuarioModel.listar()
    .then(function(resultado){
        res.json(resultado)
    })
}