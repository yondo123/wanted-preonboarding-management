import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000/',
});

const requestLogin = (email: string, password: string) =>
  instance({
    url: '/login',
    method: 'POST',
    data: {
      email,
      password,
    },
  });

export default requestLogin;
