const userModel = require('./userModel');

const getAll = () => {
    return new Promise((resolve, reject) => {
        userModel.find({}, (err, users) => {
            if (err) {
                reject(err);
            } else {
                resolve(users);
            }
        })
    })
}
const isAdmin = (username, psw) => {
    return new Promise((resolve, reject) => {
        userModel.find({ username: username, password: psw }, (err, user) => {
            if (err) {
                reject(err);
            } else {
                resolve(user);
            }
        })
    })

}

module.exports = {
    getAll,
    isAdmin
}