var database = require("../database/config")

function listar(){
    var instrucaoSql =
    `SELECT * FROM pergunta`

    return database.executar(instrucaoSql);
}