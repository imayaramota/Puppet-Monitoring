var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function entrar(req, res) {
 
  var email = req.body.email;
  var senha = req.body.senha;

  if (email == undefined) {
    res.status(400).send('Seu email está undefined!');
  } else if (senha == undefined) {
    res.status(400).send('Sua senha está indefinida!');
  } else {
    usuarioModel
      .entrar(email, senha)
      .then(function (resultado) {
        if (resultado.length == 1) {
          usuarioModel.contar_acesso(resultado[0].id_usuario)
          resultado[0].view_usuario++
          res.json(resultado[0]);
        } else if (resultado.length == 0) {
          res.status(403).send('Email e/ou senha inválido(s)');
        } else {
          res.status(403).send('Mais de um usuário com o mesmo login e senha!');
        }
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          '\nHouve um erro ao realizar o login! Erro: ',
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var setor = req.body.setorServer;
    var userName = req.body.userNameServer;
    var idUsuario = req.body.idUsuario;
    var fkEmpresa = req.body.fkEmpresa;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } 
    else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } 
    else if (setor == undefined) {
        res.status(400).send("Seu setor está undefined!");
    }
    else if (userName == undefined) {
        res.status(400).send("Seu userName está undefined!");
    } 
    else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } 
    else if (idUsuario == undefined) {
      res.status(400).send("Seu idUsuario está undefined!");
    } 
    else if (fkEmpresa == undefined) {
      res.status(400).send("Seu fkEmpresa está undefined!");
    } 
    else {
        
        usuarioModel.cadastrar(nome, email, senha, setor, userName, idUsuario,fkEmpresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listar(req, res) {
    usuarioModel
      .listar()
      .then(function (resultado) {
        if (resultado.length > 0) {
          res.status(200).json(resultado);
        } else {
          res.status(204).send('Nenhum resultado encontrado!');
        }
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          'Houve um erro ao realizar a consulta! Erro: ',
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
}

function deletar(req, res) {
    usuarioModel
      .deletar(req.params.id)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          '\nHouve um erro ao realizar a exclusão! Erro: ',
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
}

function mostrar(req, res) {
  usuarioModel
    .mostrar(req.params.id)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        '\nHouve um erro ao realizar a consulta! Erro: ',
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function atualizar(req, res) {
  console.log("Atualizando");
  console.log(req.body);
  let nome = req.body.nome;
  let username = req.body.username;
  let setor = req.body.setor;
  let email = req.body.email;
  let senha = req.body.senha;
  let id = req.params.id;

  if (nome == '') {
    res.status(400).send('Nome do usuário não está definida!');
  } else if (email == '') {
    res.status(400).send('Email não definido!');
  } else if (username == '') {
    res.status(400).send('Username não está definido!');
  } else if (setor == ''){
    res.status(400).send('Setor não está definido!');
  } else {
    usuarioModel
      .atualizar(id, nome, username, email, senha, setor)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          '\nHouve um erro ao realizar a edição! Erro: ',
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    deletar,
    atualizar,
    mostrar
}