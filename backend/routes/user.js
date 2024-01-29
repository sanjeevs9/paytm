const express=require("express");
const router=express.Router();
const   {authMiddleware}  =require( '../middlware');
const { userSignin,userSignup } =require( './zod');
const {User,Account}=require('../db')
const jwt=require('jsonwebtoken');
const JWT_SECRET=require('../config')
const zod =require('zod');



//sigup
router.post('/signup', async function(req,res){
const payload=req.body;
const response=userSignup.safeParse(payload);

if (!response.success) {
    res.status(411).json({
        message: " Incorrect inputs"
    })
    return;
}
const existingUser = await User.find({ username: payload.username });

if (existingUser.length > 0) {
    res.status(411).json({
        message: "User already exists"
    })
    return;
}

await User.create({
    username:payload.username,
    password:payload.password,
    firstName: payload.firstName,
    lastName: payload.lastName,
})


const user=await User.findOne({
    username:payload.username
})
const userId=user._id;
const token = jwt.sign({
    userId
}, JWT_SECRET);

await Account.create({
    userId:userId,
    balance: Math.random()*10000+1
})


res.status(200).json({
    message: "User created successfully",
	token: token
})

})

//signin
router.post('/signin', async function(req,res){
    const payload=req.body;
    const progress=userSignin.safeParse(payload);

    if(!progress.success){
        res.status(411).json({
            message: "Error while logging in"
        })
        return
    }

const response=await User.findOne({
    username:req.body.username,
    password:req.body.password
})

if(!response){
    res.status(411).json({
        message: "Error while logging in"
    })
    return
}

const user=await User.findOne({
    username:payload.username
})

const userId=user._id;
const token = jwt.sign({
    userId
}, JWT_SECRET);


res.status(200).json({
    token:token
})

})

const updateBody = zod.object({
	password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})


//update
router.put('/', authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne(
        { _id: req.userId }, 
        { $set: req.body });


    res.status(200).json({
        message: "Updated successfully"
    });
});


//get
router.get('/bulk',async (req,res)=>{
    //-> "" if user dont return an filter make it 0-Space
    const filter=req.query.filter || "";
   
// Regular expression to match names starting with "John" case-insensitively
//$or-The $or operator is a logical query operator in MongoDB

    const users=await User.find({
        $or:[{
            firstName: {
                $regex : filter,
                $options: 'i'
            }
            },{
                lastName: {
                    $regex: filter,
                    $options: 'i'
                }
            }]
        })
    
        res.json({
            user: users.map( x=>({
                username:x.username,
                firstName:x.firstName,
                lastName: x.lastName,
                _id: x._id
                
            }))
        })

})

router.get('/me',authMiddleware ,async (req,res)=>{
const userId=req.userId;


const user =await User.findOne({
    _id:userId
})
if (!user) {
    return res.status(404).json({ message: 'User not found' });
}
res.json({
    user
})

})

//get all users
router.get('/users' ,async(req,res)=>{
    const users=await User.find({})
   
    res.json({
      
        user: users.map( user=>({
            username:user.username,
            firstName:user.firstName,
            lastName: user.lastName,
            _id: user._id
            
        }))
    })
})

module.exports = router;