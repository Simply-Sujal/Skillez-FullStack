const userotp = require("../models/userOtp");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        // user: 'raunaksingh4099@gmail.com',
        // pass: 'udnccrfcdonhzicj'

        user : 'skillez.in@gmail.com',
        pass : 'csahlbyibwggirqo'
    }
});

const userOtpSend = async (req, res) => {
    const { email } = req.body;
 
    if (!email) {
        return res.status(400).json({ error: "Please Enter Your Email" });
    }

    try {
        const OTP = Math.floor(100000 + Math.random() * 900000);

        const existingOtpData = await userotp.findOne({ email });

        if (existingOtpData) {
            // Update the existing OTP entry
            existingOtpData.otp = OTP;
            await existingOtpData.save();
        } else {
            // Create a new OTP entry
            const newOtpData = new userotp({
                email,
                otp: OTP,
            });
            await newOtpData.save();
        }

        const mailOptions = {
            from: 'skillez.in@gmail.com',
            to: email,
            subject: "Sending Email For Otp Verification",
            text: `OTP:- ${OTP}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error sending email:", error);
                return res.status(400).json({ error: "Email not sent" });
            } else {
                console.log("Email sent", info.response);
                return res.status(200).json({ message: "Email sent successfully" });
            }
        });
    } catch (error) {
        console.error("Error sending OTP:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};


const otpVerification = async (req, res) => {
    const { email, otp } = req.body;

    if (!otp || !email) {
        return res.status(400).json({ error: "Please Enter Your OTP and Email" });
    }

    try {
        const otpVerificationData = await userotp.findOne({ email });

        if (otpVerificationData && otpVerificationData.otp === otp) {
            return res.status(200).json({ message: "OTP verified successfully" });
        } else {
            return res.status(400).json({ error: "Invalid OTP" });
        }
    } catch (error) {
        console.error("Error during OTP verification:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};    

module.exports = { userOtpSend, otpVerification };
