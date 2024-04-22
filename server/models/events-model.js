const { Schema, model } = require("mongoose");

const eventformSchema = new Schema({
    Name: { type: String, required: true },
    AnnoucementDate: { type: String, required: true },
    EndDate: { type: String, required: true },
    OrganisedBy: { type: String, required: true },
    EventType: { type: String, required: true },
    EventSmallDescription: { type: String, required: true },
    EventDescription: { type: String, required: true },
    EventImage: { type: String, required: true },
    ApplyUrl: { type: String, required: true }
})

// create a model or a collection
const Event = new model("EventForm", eventformSchema);
module.exports = Event;