import axios from 'axios';
import { User } from '../types';

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

export default requestLogin;
