const express = require('express')
const expenseModel = require('../models/model')

exports.addExpense = async (req,res,next)=>{
    const amount = req.body.amount
    const desc = req.body.desc
    const cat = req.body.cat
    try{
    const data = await expenseModel.create({
        
        amount:amount,
        desc:desc,
        cat:cat
    })
    if (data !== null || data !== undefined) {
    res.json(data)
    }
}
catch(e) {console.log(e)}
}

exports.getExpense = async (req,res,next)=>{
    console.log('in getExpense')
    const data= await expenseModel.findAll()
    .then((result)=>res.json(result))
    .catch(err=>console.log(err))

}

exports.deleteExpense = async(req,res,next)=>{
    const id = req.params.id
    await expenseModel.destroy({where: {id:id}})
    .then(result=>console.log('delete'))
    .catch(err=>console.log(err))
}



