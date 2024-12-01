const { Sequelize } = require('sequelize');
const dbConfig = require('./dbConfig');


const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
    logging: false
  }
);


sequelize
.authenticate()
.then(() => {
  console.log('Banco de Dados: OK')
})
.catch((err) =>{
  console.log('ocorreu um erro na conexão com o banco de dados', err)
});

module.exports = sequelize;