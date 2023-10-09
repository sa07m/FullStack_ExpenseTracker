const Sequelize = require('sequelize')
const sequelize = require('../util/database')

const expenseModel = sequelize.define('expense',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true    
    },

    amount :{
        type:Sequelize.INTEGER,
        allowNull:false,  
    },

    desc :{
        type:Sequelize.STRING,
        allowNull:false,  
    },

    cat :{
        type:Sequelize.STRING,
        allowNull:false,  
    }
})

module.exports = expenseModel

