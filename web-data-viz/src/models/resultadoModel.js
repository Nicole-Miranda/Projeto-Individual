var database = require("../database/config")

function adicionar(id_usuario,resultado){
    var instrucaoSql=
   `INSERT INTO resultado (fk_usuario, resultado, dt_resultado) 
        VALUES (${id_usuario}, '${resultado}', now());
    `;

    return database.executar(instrucaoSql);
}

function listarResultadoMaisRecente(id_usuario){
    var instrucaoSql=
    `SELECT id_resultado, fk_usuario, resultado, dt_resultado FROM resultado WHERE fk_usuario = ${id_usuario} ORDER BY dt_resultado DESC LIMIT 1;`;

    return database.executar(instrucaoSql);
}

function listarTodosResultadosRecentes(id_usuario){
    var instrucaoSql=
    `SELECT id_resultado, fk_usuario, resultado, dt_resultado FROM resultado WHERE fk_usuario = ${id_usuario} ORDER BY dt_resultado;`;

    return database.executar(instrucaoSql);
}

module.exports = {
    adicionar,
    listarResultadoMaisRecente,
    listarTodosResultadosRecentes
}