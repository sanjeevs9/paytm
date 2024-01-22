


import { userSignin,userSignup } from './zod';
const {User}=require('../db')
const jwt=require('jsonwebtoken');
const JWT_SECRET=require('../config')





//sigup
router.post('/signup', async function(req,res){
const payload=req.body;
const response=userSignup.safeParse(payload);

if(!response.success || User.find(payload.username)){
    res.sendStatus(411).send({
        message: "Email already taken / Incorrect inputs"
    })
    return
}



await User.create({
    username:payload.username,
    password:payload.password
})

const userId=user._id;
const token=jwt.sign(userId,JWT_SECRET);

res.sendStatus(200).send({
    message: "User created successfully",
	token: token
})

})

//signin
router.post('/sigin', async function(req,res){
    const payload=req.body;
    const progress=userSignin.safeParse(payload);

    if(!progress.success){
        res.sendStatus(411).send({
            message: "Error while logging in"
        })
        return
    }

const response=await User.findOne({
    username:req.body.username,
    password:req.body.password
})

if(!response){
    res.sendStatus(411).send({
        message: "Error while logging in"
    })
    return
}


const userId=user._id;
const token=jwt.sign(userId,JWT_SECRET);
res.sendStatus(200).send({
    token:token
})

})
