var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

async function cadastrar(nome, email, senha, setor, username, nomeEmpresa, cnpj, telefone) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, setor, username, nomeEmpresa, cnpj, telefone);
    var instrucao2 = `
    INSERT INTO empresa (nomeFantasia, cnpj, telefone) VALUES ('${nomeEmpresa}', '${cnpj}', '${telefone}');
    `;
    var fkempresa = "select top(1) id from empresa order by id desc";
    if (process.env.AMBIENTE_PROCESSO != "producao") {
        fkempresa = "select id from empresa order by id desc limit 1"
    }; 
    var instrucao = `
        INSERT INTO usuario (nome, email, senha, setor, nivel, username, fkEmpresa) VALUES ('${nome}', '${email}', '${senha}', '${setor}', '1', '${username}', (${fkempresa}));
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    console.log("Executando a instrução SQL: \n" + instrucao2);
    await database.executar(instrucao2);
    return await database.executar(instrucao);
    
}

module.exports = {
    entrar,
    cadastrar,
    listar,
};