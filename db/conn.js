const { Sequelize } = require('sequelize')
const configDb = require('../../../algo/config/confiDb')

const sequelize = new Sequelize(configDb)

try{
    sequelize.authenticate()
    console.log('Conectado ao Postgresql')
}catch(err){
    console.log(`Não foi possível conectar: ${error}`)
}

module.exports = sequelize
/* exports.default = sequelize */
