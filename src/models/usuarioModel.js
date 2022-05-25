var database = require("../database/config")

// function cadastrar(nome, email, senha, setor, userName, idUsuario) {

//     var instrucao = `
//         INSERT INTO usuario (fkEmpresa, fkAdmin, nome, email, senha, setor, username, nivel) VALUES (${instrucao}, ${idUsuario}, '${nome}', '${email}', '${senha}', '${setor}' , '${userName}', 0);
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

async function cadastrar(nome, email, senha, setor, userName, idUsuario, fkEmpresa) {
    // console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, setor, userName, nomeEmpresa, cnpj, telefone);
    var instrucao1 = `
    select fkEmpresa from usuario where fkAdmin = ${idUsuario}
    `;
    var instrucao2 = `
        INSERT INTO usuario (fkEmpresa, fkAdmin, nome, email, senha, setor, username, nivel) VALUES (${fkEmpresa}, ${idUsuario}, '${nome}', '${email}', '${senha}', '${setor}' , '${userName}', 0);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao1);
    console.log("Executando a instrução SQL: \n" + instrucao2);
    // await database.executar(instrucao1);
    return await database.executar(instrucao2);  
}

function listar() {
    return database.executar("SELECT * FROM usuario;");
}

function deletar(id) {
    let instrucao = `
      DELETE FROM usuario WHERE id = ${id}
      `;
    return database.executar(instrucao);
}

function mostrar(id) {
    var instrucao = `
      SELECT nome, email, username, setor, nivel FROM usuario where id = ${id}
      `;
    return database.executar(instrucao);
}

function atualizar(id, nome, username, email, senha, setor) {
    var instrucao = `
      UPDATE usuario SET nome = '${nome}', email = '${email}', senha = '${senha}', username = '${username}', setor= '${setor}' WHERE id = ${id}
      `;
    if (senha == '') {
        instrucao = `
        UPDATE usuario SET nome = '${nome}', email = '${email}', username = '${username}', setor= '${setor}' WHERE id = ${id}
        `;
    }
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar,
    deletar,
    mostrar,
    atualizar
};