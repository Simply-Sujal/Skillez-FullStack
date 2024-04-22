const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
})

// secure the password with the bcrypt
// niche wala part jo ha pre wala , wo use aata ha ek tarike ka middleware ke jaisa , data ko db mai dalne se pahle ye chalta hai 
userSchema.pre("save", async function (next) {
    // console.log("pre method" , this)
    const user = this;
    if (!user.isModified("password")) {
        next();
    }
    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    } catch (error) {
        next(error);
    }
})


// compare the password
userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
}


// JSON , it is for authentication and authorization ,  web token are typically not stored in the database along with other user details. Instead , they are issued by the server during the aythentication process and then stored on the client-side (e.g. : in cookies or local storage) for later use
// creating the instance : with the help of methods you can create multiple function 
userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin
        },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "30d",
            }
        )
    } catch (error) {
        console.error(error);
    }
};

const User = new mongoose.model("User", userSchema);
module.exports = User;