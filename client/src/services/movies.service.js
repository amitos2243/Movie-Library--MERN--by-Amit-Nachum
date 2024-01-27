import axios from 'axios';
import AuthService from './auth.service';

const url = 'http://localhost:8000/api/movies/';

class MoviesService {
  async getMovies() {
    const isAuth = await AuthService.isAuth();
    if (isAuth) {
      const res = await axios.get(url);
      return res.data;
    }
  }
  async deleteMovie(id) {
    const isAuth = await AuthService.isAuth();
    if (isAuth) {
      await axios.delete(url + id)
    }
  }
  async getMovie(id) {
    const isAuth = await AuthService.isAuth();
    if (isAuth) {
      const res = await axios.get(url + id);
      return res.data;
    }
  }
  async updateMovie(movieData) {
    const isAuth = await AuthService.isAuth();
    if (isAuth) {
      await axios.put(url + movieData._id, movieData);
    }
  }
  async addMovie(movieData) {
    const isAuth = await AuthService.isAuth();
    if (isAuth) {
      await axios.post(url, movieData);
    }
  }
}

export default new MoviesService();