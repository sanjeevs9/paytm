const zod=require('zod');


const user=zod.object({
    username:zod.string().email(),
    firstName:zod.string(),
    lastName:zod.string(),
    password:zod.any()
})

module.exports({
    user
})
