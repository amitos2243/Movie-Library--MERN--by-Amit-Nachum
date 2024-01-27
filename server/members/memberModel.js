const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    name: String,
    city: String,
    email: String
});

const Member = mongoose.model('members', memberSchema);
module.exports = Member

