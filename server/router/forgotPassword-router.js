// forgotPassword-router.js

const express = require("express");
const router = new express.Router();
const User = require("../models/user-models");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'skillez.in@gmail.com',
        pass: 'csahlbyibwggirqo'
    }
});

router.post("/sendpasswordlink", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ status: 400, message: "Email is required" });
    }

    try {
        const userfind = await User.findOne({ email });

        if (!userfind) {
            return res.status(404).json({ status: 404, message: "User not found" });
        }

        // Generate a random password
        const newPassword = Math.random().toString(36).slice(-8);

        // Hash the new password
        // const hashedPassword = await bcrypt.hash(newPassword, 12);

        // Update user's password in the database
        // userfind.password = hashedPassword;
        userfind.password = newPassword;
        await userfind.save();

        const mailOptions = {
            from: 'skillez.in@gmail.com',
            to: email,
            subject: "Sending Email For New Password : ",
            text: `Your new password is: ${newPassword}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error sending email:", error);
                return res.status(500).json({
                    status: 500,
                    message: "Internal server error"
                });
            } else {
                console.log("Email sent", info.response);
                return res.status(201).json({
                    status: 201,
                    message: "Email sent successfully"
                });
            }
        });
    } catch (error) {
        console.error("Error processing request:", error);
        return res.status(500).json({ status: 500, message: "Internal server error" });
    }
});

module.exports = router;  
