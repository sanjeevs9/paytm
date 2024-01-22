const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://sanjeev:VH2cYQkXF178eBsE@cluster0.v8nr0x6.mongodb.net/paytm");

const UserSchema=new mongoose.Schema({
 username:String,
 password:String,
 firstName:String,
 secondName:String


})

const User = mongoose.model('User',UserSchema);

module.exports={
    User
}