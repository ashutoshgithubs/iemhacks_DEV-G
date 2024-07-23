const zod = require("zod");

const userSignupSchema = zod.object({
    firstName: zod.string(),
    lastName: zod.string(),
    email: zod.string().email(),
    password: zod.string(),
    confirmPassword: zod.string(),
    accoutnType: zod.string(),
    contactNumber: zod.string(),
    otp: zod.string()
})

const userSigninSchema = zod.object({
    email: zod.string().email(),
    password: zod.string()
})

module.exports = { userSigninSchema, userSignupSchema };