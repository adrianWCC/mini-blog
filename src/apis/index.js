import Axios from 'axios';


const instance = Axios.create({
  baseURL: 'https://hfjzvymi.api.lncld.net/1.1',
  headers: {
    'x-avoscloud-application-id': 'HfJzvYmInaLcGgIeKYHU2xiK-gzGzoHsz',
    'x-avoscloud-application-key': 'sEM6i1sE9eEPpGIh9xJLPipY',
    'Content-Type': 'application/json',
  },
});

instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function () {
  // 对响应错误做点什么
  return Promise.resolve({
    data: null
  });
});

export default {
  signUp: (username, password) => instance.post('/users', {
    username,
    password,
  }),
  login: (username, password) => instance.post('/login', {
    username,
    password,
  }),
};
