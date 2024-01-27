import axios from 'axios';
import AuthService from './auth.service';
const url = 'http://localhost:8000/api/members/';

class MembersService {
  async getAllMembers() {
    const isAuth = await AuthService.isAuth();
    if (isAuth) {
      const res = await axios.get(url);
      return res.data;
    }
  }

  async getMember(id) {
    const isAuth = await AuthService.isAuth();
    if (isAuth) {
      const res = await axios.get(url + id);
      return res.data;
    }
  }
  async deleteMember(id) {
    const isAuth = await AuthService.isAuth();
    if (isAuth) {
      await axios.delete(url + id);
    }
  }
  async createMember(newMember) {
    const isAuth = await AuthService.isAuth();
    if (isAuth) {
      await axios.post(url, newMember);
    }
  }
  async updateMember(memberData) {
    const isAuth = await AuthService.isAuth();
    if (isAuth) {
      await axios.put(url + memberData._id, memberData);
    }
  }
}

export default new MembersService();