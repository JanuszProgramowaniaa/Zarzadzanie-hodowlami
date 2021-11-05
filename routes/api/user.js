const express = require('express');
const user = require('../../models/user');
const router = express.Router();

//User Model

const User = require('../../models/user')

// @route GET api/user

router.get("/",(req,res)=>{
    user.find()
    .then(user=> res.json(user));
})

router.post('/',(req,res)=>{
    const newuser = new user({
        name: req.body.name,
        surname: req.body.surname,
    })
    newuser.save().then(user =>res.json(user))
})




module.exports=router;