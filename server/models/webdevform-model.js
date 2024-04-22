const { Schema, model } = require("mongoose");

const serviceformSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    linkedinUrl: { type: String, required: true },
    titleOfTheProject: { type: String, required: true },
    aboutProject: { type: String, required: true },
    deadlineDate: { type: String, required: true },
    imageUrl: { type: String, required: true },
    service: { type: String, required: true },
    startingFrom: { type: String, required: true },
    priceRange: {
        type: [Number], // Use an array of numbers
        required: true,
    },
})

// create a model or a collection
const ServiceForm = new model("ServiceForm", serviceformSchema);
module.exports = ServiceForm;