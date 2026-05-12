function adicionar(req, res) {
    // Recuperando os valores do corpo da requisição (JSON do fetch)
    var id_usuario = req.body.idUsuarioServer; 
    var resultado = req.body.resultadoServer;

    if (id_usuario == undefined) {
        res.status(400).send("Seu id_usuario está undefined!");
    } else if (resultado == undefined) {
        res.status(400).send("Seu resultado está undefined!");
    } else {
        // Passando os valores como parâmetros para a função do model
        resultadoModel.adicionar(id_usuario, resultado)
            .then(function (resposta) {
                res.status(200).json(resposta);
            }).catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    adicionar
}
//var resultadoModel = require("../models/resultadoModel");

//function adicionar(req, res){
  //  resultadoModel.listar()
    //.then(function(resultado){
      //  res.json(resultado)
    //})
//}