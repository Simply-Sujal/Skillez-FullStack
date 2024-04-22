const User = require("../models/user-models");
const bcrypt = require('bcrypt');
const userotp = require("../models/userOtp");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'raunaksingh4099@gmail.com',
        pass: 'udnccrfcdonhzicj'
    }
});

const home = async (req, res) => {
    try {
        res.status(200).send("Welcome to Sujal Kingdom using controllers");
    } catch (error) {
        console.log(error);
    }
};

const register = async (req, res) => {
    try {
        // console.log(req.body)
        const { username, email, phone, password } = req.body;
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "email already exists!" })
        }

        // hash the password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound); 
        // const userCreated = await User.create({ username, email, phone, password, password: hash_password });

        const userCreated = await User.create({ username, email, phone, password });
        res.status(201).json({
            msg: "registration successful",
            token: await userCreated.generateToken(), userId: userCreated._id.toString()
        });
    } catch (error) {
        // res.status(500).json("Internal Server Error")
        next(error);
    }
}


// user login logic 
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });

        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const user = await userExist.comparePassword(password);

        if (user) {
            res.status(200).json({
                msg: "Login Successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        res.status(500).json("Internal server error.");
    }
};

// to send the user data - user login
const user = async (req, res) => {
    try {
        const userData = req.user;
        return res.status(200).json({ userData });
    } catch (error) {
        console.log(`Error from the user route: ${error}`);
    }
};



module.exports = { home, register, login, user};
