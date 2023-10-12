const {signup,login,Contactus}=require('../controller/user')
const express=require('express')
const router=express.Router()

router.post('/signUp',signup);
router.post('/login',login);
router.post('/contact',Contactus)

module.exports=router;