const sequelize = require('sequelize')
const dataBase = require('./config')



const connection = new sequelize.Sequelize(dataBase)

module.exports = connection