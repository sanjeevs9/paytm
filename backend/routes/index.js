const express = require("express");
const User=require('./user');
const Account=require('./account')

const  router=express.Router();

router.use('/user',User);
router.use('/account',Account);



module.exports=router;