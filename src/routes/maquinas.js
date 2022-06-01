var express = require("express");
var router = express.Router();

var maquinaController = require("../controllers/maquinaController");

router.post("/cadastrar", function (req, res) {
    maquinaController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    maquinaController.entrar(req, res);
});

router.get("/:fkAdmin", function (req, res) {
    maquinaController.listar(req, res);
});

router.delete('/deletar/:id', function (req, res) {
    maquinaController.deletar(req, res);
});

// carregando os dados do formulário
router.get('/mostrar/:id', function (req, res) {
   maquinaController.mostrar(req, res);
  });
  
  router.put('/atualizar/:id', function (req, res) {
    maquinaController.atualizar(req, res);
  });

module.exports = router;