const { Schema, model } = require("mongoose");

const serviceformSchema3 = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    linkedinUrl: { type: String, required: true },
    service: { type: String, required: true },
    aboutYou: { type: String, required: true }
})

// create a model or a collection
const ServiceForm3 = new model("ServiceForm3", serviceformSchema3);
module.exports = ServiceForm3;