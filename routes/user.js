const express=require('express')

const router= express.Router()
const UserModel=require('../models/User')

//rout post data
router.post('/user',(req,res)=>{
    const {name,age,favoriteFood} = req.body
const newUser = new UserModel({
name,
age,
favoriteFood

})
//save newUser in database
newUser.save()

//promise .then (traitements  be happen if operation is succeed )

.then(user=>res.status(200).json(users))

// if the newUser is not saved we use .catch
.catch(err=>res.status(400).json(err))

})

//other rout : get
router.get('/user',(req,res)=>{
UserModel.find()
.then(users=>res.status(200).json(users))
.catch(err=>res.status(400).json(err))
})
router.get('/user',(req,res)=>{
    UserModel.findOne()
    .then(users=>res.status(200).json(users))
    .catch(err=>res.status(400).json(err))
    })
//query
router.get('/user',(req,res)=>{
    UserModel.select({name:true})
    .then(users=>res.status(200).json(users))
    .catch(err=>res.status(400).json(err))
})

router.get('/user',(req,res)=>{
    UserModel.sort({name:'Imene'})
    .then(users=>res.status(200).json(users))
    .catch(err=>res.status(400).json(err))
})

router.get('/user',(req,res)=>{
    UserModel.limit(2)
    .then(users=>res.status(200).json(users))
    .catch(err=>res.status(400).json(err))
})
//other route : delete
router.delete('/user/:id',(req,res)=>{

    UserModel.findByIdAndDelete(req.params.id)
    .then(user=>res.status(200).json(user))
    .catch(err=>res.status(400).json(err))
})

router.delete('/user/:id',(req,res)=>{

    UserModel.remove(req.params.id)
    .then(user=>res.status(200).json(user))
    .catch(err=>res.status(400).json(err))
})

//other route : update
router.put('/user/:id',(req,res)=>{

    UserModel.findByIdAndUpdate(req.params.id,req.body)
    .then(user=>res.status(200).json(user))
    .catch(err=>res.status(400).json(err))
})




//export the module
module.exports=router

