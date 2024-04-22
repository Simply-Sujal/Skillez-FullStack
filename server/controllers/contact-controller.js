const Contact = require("../models/contact-model");

const contactForm = async (req, res) => {
    try {
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({ message: "message send successfully" });
    } catch (error) {
        return res.status(500).json({ message: "message not delivered" });
    }
}

// deleting the contact data from the admin pannel
const deleteContactById = async (req, res, next) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({ _id: id });
        return res.status(200).json({ message: "Contact deleted successfully" })
    } catch (error) {
        next(error);
    }
}

module.exports = { contactForm, deleteContactById };