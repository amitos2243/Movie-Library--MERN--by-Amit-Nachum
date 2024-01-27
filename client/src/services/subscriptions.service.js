import axios from 'axios';
import AuthService from './auth.service';

const url = 'http://localhost:8000/api/subscriptions/';

class SubscriptionsService {
  async getMembersByMovieId(movieId) {
    const isAuth = await AuthService.isAuth();
    if (isAuth) {
      const res = await axios.get(url + `movie/${movieId}`);
      return res.data;
    }
  }
  async getMoviesByMemberId(memberId) {
    const isAuth = await AuthService.isAuth();
    if (isAuth) {
      const res = await axios.get(url + 'member/' + memberId);
      return res.data;
    }
  }
  async create(subscriptionData) {
    const isAuth = await AuthService.isAuth();
    if (isAuth) {
      await axios.post(url, subscriptionData);
    }
  }
  async deleteMemberFromSub(id) {
    const isAuth = await AuthService.isAuth();
    if (isAuth) {
      await axios.delete(url + 'memberId/' + id);
    }
  }
  async deleteMovieFromSub(id) {
    const isAuth = await AuthService.isAuth();
    if (isAuth) {
      await axios.delete(url + 'movieId/' + id);
    }
  }

}

export default new SubscriptionsService();