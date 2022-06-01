var database = require("../database/config");

function buscarUltimasMedidas(medida) {
  instrucaoSql = `select top 10 usoDisco
                    ,usoRam
                    ,usoProcessador
                    ,convert(varchar, dataHora, 8) as dataHora
                    ,fkMaquinaVirtual
                from [dbo].[dadosColetados] 
                where fkMaquinaVirtual = ${medida} order by id desc`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(medida) {
    instrucaoSql = `select top 1 usoDisco
                        ,usoRam
                        ,usoProcessador
                        ,convert(varchar, dataHora, 8) as dataHora
                        ,fkMaquinaVirtual
                    from [dbo].[dadosColetados] 
                    where fkMaquinaVirtual = ${medida} order by id desc`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarUltimasMedidas,
  buscarMedidasEmTempoReal,
};
