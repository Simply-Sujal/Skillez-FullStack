const mongoose = require("mongoose");

const otpUserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
});

const otpUser = mongoose.model("otpUser", otpUserSchema);

module.exports = otpUser;
