const express = require('express')
const ControllerRoute = require('../controllers/controller')

const router = express.Router()

router.post('/addExpense', ControllerRoute.addExpense)
router.get('/getExpense', ControllerRoute.getExpense)
router.delete('/deleteExpense/:id', ControllerRoute.deleteExpense)

module.exports=router
