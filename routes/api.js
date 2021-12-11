const express = require("express")
const router=express.Router();


const userActions= require('../actions/api/user');



router.get('/users',userActions.getAllUsers)
router.get('/user/:Login',userActions.getUser)
router.post('/user',userActions.saveUser)
router.put('/user/:Login',userActions.updateUser)
router.delete('/user/:Login',userActions.deleteUser)


module.exports = router;