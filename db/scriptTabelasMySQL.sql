-- ----------------------------------------------------------------------------------------------------------
-- -----------------------------------------Criando usuários e o DB-------------------------------------------
-- ----------------------------------------------------------------------------------------------------------

drop database if exists puppet;

create database puppet;

-- USUARIO DE INSERÇÃO DE COLETA DE DADOS JAR
CREATE USER IF NOT EXISTS 'jarPuppet'@'localhost' IDENTIFIED BY 'urubu100';
ALTER USER 'jarPuppet'@'localhost' IDENTIFIED WITH mysql_native_password BY 'urubu100';

-- USUARIO QUE SATISFAZ AS VONTADES DO CLIENTE NA FERRAMENTA
CREATE USER IF NOT EXISTS 'webPuppet'@'localhost' IDENTIFIED BY 'urubu100';
ALTER USER 'webPuppet'@'localhost' IDENTIFIED WITH mysql_native_password BY 'urubu100';

use puppet;
-- ----------------------------------------------------------------------------------------------------------
-- -----------------------------------------Criação das tabelas----------------------------------------------
-- ----------------------------------------------------------------------------------------------------------

create table empresa(
id int primary key auto_increment,
nomeFantasia varchar(100),
cnpj varchar(18),
telefone varchar(15),
patria varchar(15)
)auto_increment = 1;

create table usuario(
id int primary key auto_increment,
fkEmpresa int not null,
foreign key (fkEmpresa) references empresa(id),
fkAdmin int,
foreign key (fkAdmin) references usuario(id),
nome varchar(100),
username varchar(45),
senha varchar(32),
email varchar(100),
setor varchar(20),
nivel char(1)
)auto_increment = 1;

create table maquinaVirtual(
id int primary key auto_increment,
fkAdmin int not null,
foreign key (fkAdmin) references usuario(id),
hostName varchar(45),
userLogin varchar(20),
senha varchar(20),
ip varchar(15),
disco int,
ram int,
processador int
)auto_increment = 1;

create table controleDeAcesso(
id int primary key auto_increment,
fkUsuario int,
foreign key (fkUsuario) references usuario(id),
fkmaquinaVirtual int,
foreign key (fkMaquinaVirtual) references maquinaVirtual(id),
dataHora datetime
)auto_increment = 1;

create table dadosColetados (
id int primary key auto_increment,
fkMaquinaVirtual int,
foreign key (fkMaquinaVirtual) references maquinaVirtual(id),
usoDisco double,
usoRAM double,
usoProcessador double,
datahora datetime
)auto_increment = 1;


create table alertas(
id int primary key  auto_increment,
fkDadosColetados int not null,
foreign key (fkDadosColetados) references dadosColetados(id),
dataHora datetime,
descricao varchar(255),
categoria varchar(10)
)auto_increment = 1;

create table alertasPersonalizados(
id int primary key auto_increment,
fkMaquinaVirtual int,
foreign key (fkMaquinaVirtual) references maquinaVirtual(id),
dataInicio datetime,
dataFim datetime,
limiteRam double,
limiteDisco double,
limiteProcessador double,
categoria varchar(10),
descricao varchar(255)
)auto_increment = 1;

-- ----------------------------------------------------------------------------------------------------------
-- -------------------------------Privilégios do Usuário jarPuppet-------------------------------------------
-- ----------------------------------------------------------------------------------------------------------

GRANT SELECT ON puppet.empresa TO 'jarPuppet'@'localhost';
GRANT SELECT ON puppet.usuario TO 'jarPuppet'@'localhost';
GRANT SELECT, INSERT ON puppet.maquinaVirtual TO 'jarPuppet'@'localhost';
GRANT SELECT, INSERT ON puppet.controleDeAcesso TO 'jarPuppet'@'localhost';
GRANT SELECT ON puppet.alertas TO 'jarPuppet'@'localhost';
GRANT SELECT ON puppet.alertasPersonalizados TO 'jarPuppet'@'localhost';
GRANT SELECT, INSERT ON puppet.dadosColetados TO 'jarPuppet'@'localhost';

-- ----------------------------------------------------------------------------------------------------------
-- -------------------------------Privilégios do Usuário webPuppet-------------------------------------------
-- ----------------------------------------------------------------------------------------------------------

GRANT SELECT, INSERT, UPDATE, DELETE ON puppet.empresa TO 'jarPuppet'@'localhost';
GRANT SELECT, INSERT, UPDATE, DELETE ON puppet.usuario TO 'jarPuppet'@'localhost';
GRANT SELECT, INSERT, UPDATE, DELETE ON puppet.controleDeAcesso TO 'jarPuppet'@'localhost';
GRANT SELECT, INSERT, UPDATE, DELETE ON puppet.maquinaVirtual TO 'jarPuppet'@'localhost';
GRANT SELECT, INSERT, UPDATE, DELETE ON puppet.alertasPersonalizados TO 'jarPuppet'@'localhost';
GRANT SELECT ON puppet.alertas TO 'jarPuppet'@'localhost';
GRANT SELECT ON puppet.dadosColetados TO 'jarPuppet'@'localhost';