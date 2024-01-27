const express = require('express');
const userBL = require('./userUtils');
// import jwt from "jsonwebtoken";
const jwt = require('jsonwebtoken');
// import { authenticateJWT } from "../auth";
const authenticateJWT = require('../auth')
const router = express.Router();

router.get('/', async (req, res) => {
    const users = await userBL.getAll();
    return res.json(users);
});
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        // find user by username and password
        const user = await userBL.isAdmin(username, password);
        if (user) {
            // Generate an access token
            const accessToken = jwt.sign({ id: user[0]._id }, process.env.RSA_PRIVATE_KEY, { expiresIn: '1800s' });
            return res.json({ accessToken, fullname: user[0].fullname });
        }
    } catch {
        res.status(404);
        res.send({ error: "Username or password incorrect!" })
    }
});
router.post('/auth', (req, res) => {
    const token = req.body.accessToken;
    const isAuth = authenticateJWT(token);
    if (isAuth) {
        return res.status(200).send({ 'auth': true })
    } else {
        return res.status(401).send({ 'auth': false })
    }

})



module.exports = router