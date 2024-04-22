const Contact = require("../models/contact-model")

const allContact = async (req, res) => {
    try {
        const userContact = await Contact.find();
        if (!userContact || userContact.length === 0) {
            return res.status(404).json({ msg: "No Contact Found" })
        }
        return res.status(200).json(userContact);
    } catch (error) {
        next(error);
    }
}

module.exports = allContact;