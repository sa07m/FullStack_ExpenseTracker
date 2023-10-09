const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const expenseRoute = require('./routes/route')
const sequelize = require('./util/database')
const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())

app.use(expenseRoute)
sequelize.sync()
.then(result=>{
    console.log('listening to port 5000')
    app.listen(5000)
})
.catch(err=>console.log(err))






