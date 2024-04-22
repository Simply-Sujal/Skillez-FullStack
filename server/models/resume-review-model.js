const { Schema, model } = require("mongoose");

const serviceformSchema2 = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    linkedinUrl: { type: String, required: true },
    resumeLink: { type: String, required: true },
    service: { type: String, required: true },
    about: { type: String },
})

// create a model or a collection
const ResumeReview = new model("ResumeReview", serviceformSchema2);
module.exports = ResumeReview;