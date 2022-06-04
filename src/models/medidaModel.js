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

function buscarMaquina(medida){
  instrucaoSql = `select top 1
                         CAST(disco / 1024 / 1000 AS decimal(6,2)) as espacoDisco,
                         CAST(ram / 1000 / 1000 AS decimal(6,2)) as memoriaRam,
                         mv.nome,
                         keyVM,
                         hostName,
                         ip as enderecoMaquina,
                         processador,
                         convert(varchar, dataHora, 8) as dataHora
from [dbo].[maquinaVirtual] mv inner join [dbo].[dadosColetados] dc on mv.id = dc.fkMaquinaVirtual
where dc.fkMaquinaVirtual = ${medida}`;

console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);

}

module.exports = {
  buscarUltimasMedidas,
  buscarMedidasEmTempoReal,
  buscarMaquina,
};
