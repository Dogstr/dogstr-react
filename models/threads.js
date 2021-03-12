const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const threads = new Schema ({
    park_id: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    user_name: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: true
    }
});

let Threads = mongoose.model("Threads", threads);

module.exports = Threads;