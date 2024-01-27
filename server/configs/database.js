const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect('mongodb+srv://Amitos:baz0fedo9@movielibrary.r5c6emu.mongodb.net/', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = connectDB