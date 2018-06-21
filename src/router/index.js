/**
 * Created by Administrator on 2018/3/29.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Second from '@/components/Second'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },{
    path: '/index',
    name: 'Index',
    component: Index
  },{
    path:'/second',
    name: 'Second',
    component: Second
  },{
    path: '/login',
    name: 'Login',
    component: Login
  },{
    path: '/',
    redirect: '/'
  }
]
var router = new Router({
  routes
});

export default router
