const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    title: String,
    category: String,
    content: String,
    image: String,
    video: String,
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Post", Schema);