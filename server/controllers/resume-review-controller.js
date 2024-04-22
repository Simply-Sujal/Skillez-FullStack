const ResumeReview = require("../models/resume-review-model");

const resumeReviewForm = async (req, res) => {
    try {
        const response = req.body;
        await ResumeReview.create(response);
        return res.status(200).json({ message: "message send successfully" });
    } catch (error) {
        return res.status(500).json({ message: "message not delivered" });
    }
}

module.exports = { resumeReviewForm };