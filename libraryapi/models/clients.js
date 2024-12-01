const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');



const client = sequelize.define('client',{
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nome:{
    type: DataTypes.STRING,
    allowNull: false
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  endereco:{
    type: DataTypes.STRING,
    allowNull: false
  },
  telefone:{
    type: DataTypes.STRING,
    allowNull: false
  },
  CPF:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
},{
  tableName: 'Clients'
});

module.exports = client;