const { Schema, model } = require("mongoose");

const newsLetterSchema = new Schema({
    email: { type: String, required: true },
})

// create a model or a collection
const NewsLetter = new model("NewsLetter", newsLetterSchema);
module.exports = NewsLetter;