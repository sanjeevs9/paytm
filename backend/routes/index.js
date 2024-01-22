const express = require("express");
const User=require('./user');

const router=express.router();

router.use('/api/v1/user',User);



module.exports=router;