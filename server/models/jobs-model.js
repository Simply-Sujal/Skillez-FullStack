const { Schema, model } = require("mongoose");

const jobformSchema = new Schema({
    Role: { type: String, required: true },
    Company: { type: String, required: true },
    AnnoucementDate: { type: String, required: true },
    EndDate: { type: String, required: true },
    Location: { type: String, required: true },
    JobType: { type: String, required: true },
    JobDescription: { type: String, required: true },
    ApplyUrl: { type: String, required: true }
}) 

// create a model or a collection
const Job = new model("JobForm", jobformSchema);
module.exports = Job;