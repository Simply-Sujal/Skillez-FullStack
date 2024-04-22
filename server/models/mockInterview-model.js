const { Schema, model } = require("mongoose");

const serviceformSchema4 = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    linkedinUrl: { type: String, required: true },
    scheduleInterview: { type: String, required: true },
    resumeLink: { type: String, required: true },
    service: { type: String, required: true },
    timeForInterview: { type: String, required: true },
})

// create a model or a collection
const MockInterview = new model("ServiceForm4", serviceformSchema4);
module.exports = MockInterview;