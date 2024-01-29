const express=require("express");
const {Account}=require('../db')
const   {authMiddleware}  =require( '../middlware');

const router=express.Router();


router.get('/balance',authMiddleware,async (req,res)=>{
const account=await Account.findOne({
    userId:req.userId
})
if (!account) {
    res.status(404).json({
        message: "Account not found"
    });
    return;
}
const value=account.balance;

res.json({
    balance:value
})
})

//session
router.post('/transfer',authMiddleware, async (req, res) => {
   
    const receiver = req.body.to;
    const amount = req.body.amount;

    const account = await Account.findOne({
        userId: receiver
    })
    if (!account) {
     console.log("invalid account")
        res.json({
            message: "Invalid account"
        })
        return
    }

    const sender = await Account.findOne({
        userId: req.userId
    })

    if (sender.balance < amount) {
    
        res.json({
            message: "Insufficient balance"
        })
        return
    }

    const senderId = sender.userId;
    const receiverId = account.userId;

    // localStorage.setItem('senderId', senderId);
    


    await Account.updateOne(
        { userId: senderId },
        { $inc: { balance: -amount } }
    )
    
    await Account.updateOne(
        { userId: receiverId },
        { $inc: { balance: +amount } }
    )
   
    res.json({
        message: "transfer successful"
    })

})
module.exports=router;

// transaction session---> full transaction or nothing at all(if also some updation is done in between then also it will be rolled back)