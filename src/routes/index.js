import Regist from '../pages/regist';
import Login from '../pages/login';
import Home from '../pages/home'
import Publish from '../pages/publish'
import Mine from '../pages/mine'

export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/regist',
    component: Regist,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/publish',
    component: Publish
  },
  {
    path: '/mine',
    component: Mine
  }
];
