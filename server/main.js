const dotenv = require('dotenv');
dotenv.config();
// Require needed modules and initialize Express app
const express = require('express');
const cors = require('cors');
//import '../configs/database';
const connectDB = require('./configs/database')
// Controllers
const movieController = require('./movies/movieController');
const memberController = require('./members/memberController');
const subscriptionController = require('./subscriptions/subscriptionController');
const userController = require('./users/userController');

const app = express();
const PORT = process.env.PORT || 8000;

connectDB()
// Set cors and express/bodyParser middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/movies', movieController);
app.use('/api/members', memberController);
app.use('/api/subscriptions', subscriptionController);
app.use('/api/users', userController);


app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));