//process.env.AMBIENTE_PROCESSO = "desenvolvimento";
process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = 3333;

var app = express();

var usuariosRouter = require("./src/routes/usuarios");
var maquinasRouter = require("./src/routes/maquinas");
var usuariosLoginRouter = require("./src/routes/usuariosLogin");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.get('/', (req,res) => res.redirect('/Home'))
app.use("/usuarios", usuariosRouter);
app.use("/usuariosLogin", usuariosLoginRouter);
app.use("/maquinas", maquinasRouter);


app.listen(PORTA, function () {
    console.log(`Servidor do site está rodando rodando: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", banco local (MySQL Workbench). \n
    \t\tSe "producao", banco remoto (SQL Server em nuvem Azure)`);
});