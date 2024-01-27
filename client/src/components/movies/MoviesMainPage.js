import { Container, Box } from '@material-ui/core';
import { NavLink, Switch, Route } from 'react-router-dom';
import MoviesPage from './MoviesPage';
import AddMoviePage from './AddMoviePage';
import EditMoviePage from './EditMoviePage';

const MoviesMainPage = () => {

    return (
        <>
            <Container fixed>
                <Box display="flex" flexWrap="wrap" p={1} m={1} bgcolor="background.paper">
                    <Box p={1}><NavLink exact to="/movies" style={isActive => ({ color: isActive ? "#28A228" : "#B29B6D" })}>All Movies</NavLink></Box>
                    <Box p={1}><NavLink to="/movies/add-movie" style={isActive => ({ color: isActive ? "#28A228" : "#B29B6D" })} >Add Movie</NavLink></Box>
                </Box>

                <Switch>
                    <Route exact path="/movies" component={MoviesPage} />
                    <Route path="/movies/add-movie" component={AddMoviePage} />
                    <Route path="/movies/edit/:id" component={EditMoviePage} />
                </Switch>

            </Container >
        </>
    );
}

export default MoviesMainPage;