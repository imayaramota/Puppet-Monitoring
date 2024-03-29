var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:medidas", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/listar-maquina/:medidas", function (req, res) {
    medidaController.buscarMaquina(req, res);
})

router.get("/tempo-real/:medidas", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})



module.exports = router;