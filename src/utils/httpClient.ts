import axios from 'axios';
import { LIMIT } from 'src/types/constants';
import { Search, User } from '../types';

const instance = axios.create({
  baseURL: 'http://localhost:4000/',
});

const requestLogin = (user: User) =>
  instance({
    url: '/login',
    method: 'POST',
    data: {
      email: user.email,
      password: user.password,
    },
  });

const requestAccounts = (currentPage: number) =>
  instance({
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
    url: '/accounts',
    method: 'GET',
    params: {
      _expand: 'user',
      _page: currentPage,
      _limit: LIMIT,
    },
  });

export { requestLogin, requestAccounts };
