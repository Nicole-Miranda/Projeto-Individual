var database = require("../database/config")

function adicionar(id_usuario,resultado){
    var instrucaoSql=
   `INSERT INTO resultado (fk_usuario, resultado, dt_resultado) 
        VALUES (${id_usuario}, '${resultado}', now());
    `;

    return database.executar(instrucaoSql);
}

function listarResultados(id_usuario,resultado){
    var instrucaoSql=
    `SELECT id_usuario,fk_usuario, resultado, dt_resultado FROM resultado`;

    return database.executar(instrucaoSql);
}