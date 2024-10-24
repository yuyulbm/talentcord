const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    icon: String,
    password: String,
    bio: String,
    tags: Array,
});

module.exports = mongoose.model("user", userSchema);
