const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
    movie_id: String,
    member_id: String,
    date: Date
});

const Subscription = mongoose.model('subscriptions', subscriptionSchema);
module.exports = Subscription;


