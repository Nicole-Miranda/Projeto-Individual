var database = require("../database/config")

function listar(){
    var instrucaoSql=
    `SELECT * FROM resultado`

    return database.executar(instrucaoSql);
}