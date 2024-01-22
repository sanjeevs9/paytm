const express=require('express');
const app=express();
const cors=require('cors');
const user=require('./zod');
const {User}=require('../db')
const jwt=require('jsonwebtoken');
const JWT_SECRET=require('../config')

app.use(express.json());
app.use(cors());


//sigup
app.post('/signup', async function(req,res){
const payload=req.body;
const response=user.safeParse(payload);

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
app.post('/sigin', async function(req,res){

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
