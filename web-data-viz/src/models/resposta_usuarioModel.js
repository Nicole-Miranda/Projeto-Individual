var database = require("../database/config")

function listar(){
    var instrucaoSql=
    `SELECT * FROM resposta_usuario`

    return database.executar(instrucaoSql);
}