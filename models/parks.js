const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const parks = new Schema ({
    id: {
      type: String,
      required: true
    },
    name: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: false
    }
});

let Parks = mongoose.model("Parks", parks);

module.exports = Parks;