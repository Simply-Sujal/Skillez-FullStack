const NewsLetter = require("../models/newsLetter-model");

const newsLetter = async (req, res) => {
    try {
        const response = req.body;
        await NewsLetter.create(response);
        return res.status(200).json({ message: "message send successfully" });
    } catch (error) {
        return res.status(500).json({ message: "message not delivered" });
    }
}

module.exports = { newsLetter };