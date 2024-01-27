const subscriptionModel = require('./subscriptionModel');

const getAll = () => {
    return new Promise((resolve, reject) => {
        subscriptionModel.find({}, (err, subscriptions) => {
            if (err) {
                reject(err);
            } else {
                resolve(subscriptions);
            }
        })
    })
}
const create = (subscriptionData) => {
    return new Promise((resolve, reject) => {
        let newSubscription = new subscriptionModel({
            movie_id: subscriptionData.movie_id,
            member_id: subscriptionData.member_id,
            date: subscriptionData.date
        });

        newSubscription.save((err) => {
            if (err) {
                reject(err);
            } else {
                resolve('Subscription created successfully!');
            }
        });
    });
}
// get all movies for one member_id
const getMoviesByMemberId = (id) => {
    return new Promise((resolve, reject) => {
        subscriptionModel.find({ member_id: id }, (err, movies) => {
            if (err) {
                reject(err);
            } else {
                resolve(movies);
            }
        })
    })
}
// get all members for movie_id
const getMembersByMovieId = (id) => {
    return new Promise((resolve, reject) => {
        subscriptionModel.find({ movie_id: id }, (err, members) => {
            if (err) {
                reject(err);
            } else {
                resolve(members);
            }
        })
    })
}
const deleteMemberById = (id) => {
    return new Promise((resolve, reject) => {
        subscriptionModel.remove({ member_id: id }, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve('Sub deleted successfully!');
            }
        });
    });
}
const deleteMovieById = (id) => {
    return new Promise((resolve, reject) => {
        subscriptionModel.deleteMany({ movie_id: id }, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve('Sub deleted successfully!');
            }
        });
    });
}

module.exports = {
    getAll,
    create,
    getMoviesByMemberId,
    getMembersByMovieId,
    deleteMemberById,
    deleteMovieById
}