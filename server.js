const express = require('express')
const mongoose=require('mongoose')
require('dotenv').config({path:'config/.env'})


const app = express()

//use middleware
app.use(express.json())

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true,useUnifiedTopology: true },(err)=>{
if (err)    
 throw err
    console.log('db Connected...')
})


// other routes
app.use('/api',require('./routes/user'))

app.listen(5000,()=>{
    console.log('connected...')
})

