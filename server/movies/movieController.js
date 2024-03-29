const express = require('express')
const movieBL = require('./movieUtils')
const router = express.Router()

router.get('/', async (req, res) => {
    const movies = await movieBL.getAll();
    return res.json(movies);
});

router.get('/:id', async (req, res) => {
    try {
        const movieId = req.params.id;
        const movie = await movieBL.getById(movieId);
        return res.json(movie);
    } catch {
        res.status(404);
        res.send({ error: "Movie doesn't exist!" })
    }
});

router.post('/', async (req, res) => {
    const newMovieData = req.body;
    const movieData = await movieBL.create(newMovieData);
    return res.json(movieData);
});

router.put('/:id', async (req, res) => {
    try {
        const movieData = req.body;
        const id = req.params.id;
        const updatedData = await movieBL.update(id, movieData);
        return res.json(updatedData);
    } catch {
        res.status(404);
        res.send({ error: "Movie doesn't exist!" })
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const movieId = req.params.id;
        const deletedMovie = await movieBL.deleteById(movieId);
        return res.json(deletedMovie);
    } catch {
        res.status(404);
        res.send({ error: "Movie doesn't exist!" })
    }
});

module.exports = router


