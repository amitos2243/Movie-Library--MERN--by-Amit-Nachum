const movieModel = require("./movieModel");

const getAll = () => {
    return new Promise((resolve, reject) => {
        movieModel.find({}, (err, movies) => {
            if (err) {
                reject(err);
            } else {
                resolve(movies);
            }
        })
    })
}
const getById = (id) => {
    return new Promise((resolve, reject) => {
        movieModel.findById(id, (err, movie) => {
            if (err) {
                reject(err);
            } else {
                resolve(movie);
            }
        })
    })
}
const create = (movieData) => {
    return new Promise((resolve, reject) => {
        let newMovie = new movieModel({
            name: movieData.name,
            premiered: movieData.premiered,
            genres: movieData.genres,
            image: movieData.image
        });

        newMovie.save((err) => {
            if (err) {
                reject(err);
            } else {
                resolve('Movie created successfully!');
            }
        });
    });
}
const update = (id, movieData) => {
    return new Promise((resolve, reject) => {
        movieModel.findByIdAndUpdate(id,
            {
                name: movieData.name,
                premiered: movieData.premiered,
                genres: movieData.genres,
                image: movieData.image
            }, (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve('Movie updated successfully!')
                }
            });
    });
}
const deleteById = (id) => {
    return new Promise((resolve, reject) => {
        movieModel.findByIdAndDelete(id, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve('Movie deleted successfully!');
            }
        });
    });
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById,
}