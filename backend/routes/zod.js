const zod=require('zod');


const userSignup=zod.object({
    username:zod.string().email(),
    firstName:zod.string(),
    lastName:zod.string(),
    password:zod.any()
})
const userSignin=zod.object({
    username:zod.string().email(),
    password: zod.any()

})

module.exports({
    userSignup,
    userSignin
})
