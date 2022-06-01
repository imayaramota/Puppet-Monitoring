var maquinaModel = require("../models/maquinaModel");

var sessoes = [];

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var idUsuario = req.body.idUsuario;
    


    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }  
    else {
        maquinaModel.cadastrar(nome,idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro da máquina! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listar(req, res) {
    maquinaModel
      .listar(req.params.fkAdmin)
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
    maquinaModel
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
  maquinaModel
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
  let nome = req.body.nome;
  let userLogin = req.body.userLogin;
  let senha = req.body.senha;
  let id = req.params.id;

  if (nome == '') {
    res.status(400).send('Nome do usuário não está definida!');
  } else if (userLogin == '') {
    res.status(400).send('UserLogin não definido!');
  } else {
    maquinaModel
      .atualizar(id, nome, userLogin, senha)
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
    cadastrar,
    listar,
    atualizar,
    mostrar,
    deletar
}