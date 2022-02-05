const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LegendsSchema = new Schema({
    name: {
        type: String,
    },
    package: {
        type: Number,
        required: true,
    },
    priceing: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true,
    },
    branch: {
        type: String,
        required: true,
    },
    Type: {
        type: String,
        required: true,
    },
    register_date: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model("Legends", LegendsSchema);