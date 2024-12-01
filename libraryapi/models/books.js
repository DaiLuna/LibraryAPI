const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const book = sequelize.define('book',{
  id:{
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  titulo:{
    type: DataTypes.STRING,
    allowNull: false
  },
  autor:{
    type: DataTypes.STRING,
    allowNull: false
  },
  genero:{
    type: DataTypes.STRING,
    allowNull: false
  },
  ano:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  disponivel:{
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
},{
  tableName: 'Books'
});

module.exports = book;