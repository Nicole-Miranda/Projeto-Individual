var database = require("../database/config")

function listar(){
    var instrucaoSql=
    `SELECT * FROM resposta`

    return database.executar(instrucaoSql);
}