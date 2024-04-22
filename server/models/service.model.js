const mongoose = require("mongoose")

const serviceSchema = new mongoose.Schema({
    service: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    provider: {
        type: String,
        require: true
    },
    thumbnailImage: {
        type: String,
        require: true
    },
    readMore: {
        type: String,
        require: true
    },
    formsLink: {
        type: String,
        require: true
    }
}, { timestamps: true })

const Service = new mongoose.model("Service", serviceSchema);

module.exports = Service;