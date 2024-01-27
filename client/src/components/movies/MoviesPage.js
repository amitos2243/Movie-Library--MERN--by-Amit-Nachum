import { useState, useEffect } from 'react';
import { Box, InputBase } from '@material-ui/core';
import MoviesService from '../../services/movies.service';
import Movie from './Movie';


const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchPhrase, setSearchPhrase,] = useState('');
    const [filteredMovies, setfilteredMovies] = useState([]);

    useEffect(() => {
        // get all movies
        const fetchData = async () => {
            const movies = await MoviesService.getMovies();
            setMovies(movies);
        }
        fetchData();
    }, []);

    useEffect(() => {
        setfilteredMovies(
            movies.filter(movie => movie.name.toLowerCase().includes(searchPhrase.toLowerCase())))
    }, [searchPhrase, movies]);

    return (
        <>
            <Box p={1}>
                <InputBase style={{ borderBottom: '1.5px solid #1F7D1F' }}
                    placeholder="Search Movie…"
                    value={searchPhrase}
                    onChange={e => setSearchPhrase(e.target.value)} />
            </Box>


            <Box display="flex" flexDirection="column" flexWrap="wrap" p={1} m={1} >
                {filteredMovies.map(movie => <Movie key={movie._id} movie={movie} />)}
            </Box>
        </>
    );
}

export default MoviesPage;