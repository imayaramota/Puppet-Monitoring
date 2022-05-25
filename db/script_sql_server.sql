DROP DATABASE IF EXISTS puppet;

CREATE DATABASE puppet;

USE puppet;

CREATE TABLE empresa (
			id			 INT PRIMARY KEY IDENTITY
		   ,nomeFantasia VARCHAR(45) NOT NULL
		   ,cnpj		 VARCHAR(14) NOT NULL
		   ,ddd			 CHAR(2)	 NOT NULL
		   ,telefone	 VARCHAR(9)  NOT NULL
);


CREATE TABLE usuario (
			id			 INT PRIMARY KEY IDENTITY
		   ,fkEmpresa	 INT			NOT NULL
		   ,fkAdmin		 INT			NOT NULL
		   ,nome		 VARCHAR(45)	NOT NULL
		   ,email		 VARCHAR(45)	NOT NULL
		   ,senha		 VARCHAR(32)	NOT NULL
		   ,setor		 VARCHAR(20)	NOT NULL
		   ,nivel		 INT			NOT NULL
,FOREIGN KEY (fkAdmin)	 REFERENCES usuario(id)
,FOREIGN KEY (fkEmpresa) REFERENCES empresa(id)
);


CREATE TABLE maquinaVirtual (
			id			 INT PRIMARY KEY IDENTITY
		   ,fkAdmin		 INT				 NOT NULL
		   ,hostName	 VARCHAR(45)		  NULL
		   ,ip			 VARCHAR(20)		  NULL
		   ,disco		 INT		  NULL
		   ,ram			 INT		  NULL
		   ,processador  INT		  NULL
		   ,keyVm        CHAR(36)		  NULL
		   ,nome         VARCHAR(45)      NULL
,FOREIGN KEY (fkAdmin) REFERENCES usuario(id)
);

CREATE TABLE controleDeAcesso (
			id				 INT PRIMARY KEY IDENTITY
		   ,fkMaquinaVirtual INT NOT NULL
		   ,fkUsuario		 INT NOT NULL
		   ,dataHora		 DATETIME
,FOREIGN KEY (fkMaquinaVirtual) REFERENCES maquinaVirtual(id)
,FOREIGN KEY (fkUsuario		  ) REFERENCES usuario(id)
);

CREATE TABLE alertaPersonalizado (
			id				  INT PRIMARY KEY IDENTITY
		   ,fkMaquinaVirtual  INT		   NOT NULL
		   ,dataInicio		  DATETIME	   NOT NULL
		   ,dataFim			  DATETIME	   NOT NULL
		   ,limiteRam		  DECIMAL(5,2) NOT NULL
		   ,limiteDisco		  DECIMAL(5,2) NOT NULL
		   ,limiteProcessador DECIMAL(5,2) NOT NULL
		   ,categoria		  VARCHAR(10)  NOT NULL
		   ,descricao		  VARCHAR(255) NOT NULL
,FOREIGN KEY (fkMaquinaVirtual) REFERENCES maquinaVirtual(id)
);

CREATE TABLE dadosColetados (
			id				 INT PRIMARY KEY IDENTITY
		   ,fkMaquinaVirtual INT			NOT NULL
		   ,usoDisco		 DECIMAL(9,2)	NOT NULL
		   ,usoRam			 DECIMAL(9,2)	NOT NULL
		   ,usoProcessador	 DECIMAL(9,2)	NOT NULL
		   ,dataHora         DATETIME		NOT NULL
,FOREIGN KEY (fkMaquinaVirtual) REFERENCES maquinaVirtual(id)
);


CREATE TABLE alertasPadrao (
			id				 INT PRIMARY KEY  IDENTITY
		   ,dataHora		 DATETIME	  NOT NULL
		   ,categoria		 VARCHAR(45)  NOT NULL
		   ,descricao		 VARCHAR(255) NOT NULL
		   ,fkDadosColetados INT		  NOT NULL
,FOREIGN KEY (fkDadosColetados) REFERENCES dadosColetados(id)
);

select * from empresa;
SELECT * FROM usuario;
SELECT * FROM maquinaVirtual;
SELECT * FROM controleDeAcesso;
SELECT * FROM alertaPersonalizado;
SELECT * FROM dadosColetados;
SELECT * FROM alertasPadrao;