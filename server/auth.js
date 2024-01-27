// authentication service
const jwt = require('jsonwebtoken');

const config = process.env



const authenticateJWT = (token) => {
    return jwt.verify(token, config.RSA_PRIVATE_KEY, (err, _) => {
        if (err) {
            return false;
        }
        else {
            return true;
        }
    });
}

module.exports = authenticateJWT;