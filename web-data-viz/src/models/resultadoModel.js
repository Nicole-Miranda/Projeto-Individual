var database = require("../database/config")

function adicionar(id_usuario,resultado){
    var instrucaoSql=
    `insert into resultado (fk_usuario, resultado, dt_resultado) values`

    return database.executar(instrucaoSql);
}