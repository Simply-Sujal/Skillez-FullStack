const ServiceForm3 = require("../models/resume-build-model");

const serviceForm3 = async (req, res) => {
    try {
        const response = req.body;
        await ServiceForm3.create(response);
        return res.status(200).json({ message: "message send successfully" });
    } catch (error) {
        return res.status(500).json({ message: "message not delivered" });
    }
}

module.exports = { serviceForm3 };