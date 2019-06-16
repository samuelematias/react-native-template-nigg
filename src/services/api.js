import apisauce from 'apisauce';

const api = apisauce.create({
  baseURL: 'https://api.github.com',
});

export default api;
