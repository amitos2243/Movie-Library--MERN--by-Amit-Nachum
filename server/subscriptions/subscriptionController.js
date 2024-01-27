const express = require('express')
const subscriptionBL = require('./subscriptionUtils');
const router = express.Router();

router.get('/', async (req, res) => {
    let subscriptions = await subscriptionBL.getAll();
    return res.json(subscriptions);
});
// get members by movie_id
router.get('/movie/:id', async (req, res) => {
    try {
        if (!req.params.id.includes('undefined')) {
            let members = await subscriptionBL.getMembersByMovieId(req.params.id)
            return res.json(members)
        }
    } catch {
        res.status(404);
        res.send({ error: "Failed to return members by movie_id!" })
    }
});
// get movies by member_id
router.get('/member/:id', async (req, res) => {
    try {
        if (!req.params.id.includes('undefined')) {
            let movies = await subscriptionBL.getMoviesByMemberId(req.params.id);
            return res.json(movies);
        }
    } catch {
        res.status(404);
        res.send({ error: "Failed to return movies by member_id!" })
    }
});

router.post('/', async (req, res) => {
    let newSubscriptionData = req.body;
    let subscriptionData = await subscriptionBL.create(newSubscriptionData);
    return res.json(subscriptionData);
});
router.delete('/memberId/:id', async (req, res) => {
    try {
        const memberId = req.params.id;
        const deleteSub = await subscriptionBL.deleteMemberById(memberId);
        return res.json(deleteSub);
    } catch {
        res.status(404);
        res.send({ error: "Member doesn't exist!" })
    }
});
router.delete('/movieId/:id', async (req, res) => {
    try {
        const movieId = req.params.id;
        const deleteSub = await subscriptionBL.deleteMovieById(movieId);
        return res.json(deleteSub);
    } catch {
        res.status(404);
        res.send({ error: "Movie doesn't exist!" })
    }
});

module.exports = router


