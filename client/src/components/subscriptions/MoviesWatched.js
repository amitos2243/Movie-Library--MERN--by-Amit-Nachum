import { useState, useEffect } from 'react';
import SubscriptionsService from '../../services/subscriptions.service';
import MoviesService from '../../services/movies.service';
import { Card, Typography, Button, makeStyles } from '@material-ui/core';
import SubscribeToMovie from './SubscribeToMovie';
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles({
    btn: {
        background: 'linear-gradient(20deg, #CE8600 30%, #FBA400 65%)',
        '&:hover': {
            color: '#FBA400',
            background: 'black'
        },
    }
})


const MoviesWatched = ({ memberId }) => {
    const classes = useStyles()
    const [movies, setMovies] = useState([]);
    const [subscribe, setSubscribe] = useState(false);

    const formatDate = (registrationDate) => {
        const date = new Date(registrationDate);
        return date.toDateString();
    }

    useEffect(() => {
        const fetchData = async () => {
            // list of movies that watched by member
            const subscriptions = await SubscriptionsService.getMoviesByMemberId(memberId);

            if (subscriptions.length > 0) {
                const moviesForMember = [];
                subscriptions.map(async s => {
                    const movie = await MoviesService.getMovie(s.movie_id);
                    moviesForMember.push({ ...s, name: movie.name })
                    if (moviesForMember.length === subscriptions.length)
                        setMovies(moviesForMember);
                })

            }
        }
        fetchData();
    }, [])

    const handleClick = () => {
        if (!subscribe)
            setSubscribe(true);
        else
            setSubscribe(false);
    }

    return (
        <Card style={{ padding: '15px', minWidth: '350px', minHeight: ' 175px' }}>
            <Typography variant='h6'>Movies watched</Typography>
            <Button variant="contained" className={classes.btn} onClick={handleClick}>Subscribe to a new movie</Button>
            {subscribe ? <SubscribeToMovie memberId={memberId} /> : ''}
            <ul>
                {movies.map(movie =>
                    <li key={movie._id}>{<NavLink to={`/movies/edit/${movie.movie_id}`}>{movie.name}</NavLink>}, {formatDate(movie.date)}</li>)}
            </ul>
        </Card >
    );
}
export default MoviesWatched;