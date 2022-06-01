var database = require("../database/config")

function cadastrar(nome, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome);
    var instrucao = `
        INSERT INTO maquinaVirtual (fkAdmin, nome, keyVM) VALUES (${idUsuario},'${nome}', newId());
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listar(fkAdmin) {
    let instrucao = `
    SELECT * FROM maquinaVirtual where fkAdmin = ${fkAdmin}
    `;
    return database.executar(instrucao);
}

function deletar(id) {
    let instrucao = `
      DELETE FROM maquinaVirtual WHERE id = ${id}
      `;
    return database.executar(instrucao);
}

function mostrar(id) {
    var instrucao = `
      SELECT nome FROM maquinaVirtual where id = ${id}
      `;
    return database.executar(instrucao);
}

function atualizar(id, nome, userLogin, senha) {
    var instrucao = `
      UPDATE maquinaVirtual SET nome = '${nome}' WHERE id = ${id}
      `;
    if (senha == '') {
        instrucao = `
        UPDATE maquinaVirtual SET nome = '${nome}' WHERE id = ${id}
        `;
    }

    console.log(instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar,
    deletar,
    mostrar,
    atualizar
};