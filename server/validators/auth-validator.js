const { z } = require("zod");

const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is rerquired" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least of 3 characters" })
        .max(255, { message: "Email must not be more than 255 characters" }),

    password: z
        .string({ required_error: "Password is required" })
        .min(6, { message: "Password must be at least of 6 characters" })
        .max(1024, { message: "Password can't be greater than 1024 characters" })

}) 

// creating an object schema
const signupSchema = loginSchema.extend({
    username: z
        .string({ required_error: "Name is rerquired" })
        .trim()
        .min(3, { message: "Name must be at least of 3 chars." })
        .max(255, { message: "Name must not be more tha 255 characters." }),

    phone: z
        .string({ required_error: "Phone is rerquired" })
        .trim()
        .min(10, { message: "Phone must be at least of 10 chars." })
        .max(20, { message: "Phone must not be more tha 20 characters." }),

})

module.exports = { signupSchema, loginSchema };