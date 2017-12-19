import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 路由懒加载
const index = () => import('@/pages/index/index')
const home = () => import('@/pages/index/home/home')
const video = () => import('@/pages/index/video/video')
const collect = () => import('@/pages/index/collect/collect')
const user = () => import('@/pages/index/user/user')
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: index,
      children: [
        {
          name: 'home',
          path: 'home',
          component: home
        },
        // footer的video页面
        {
          name: 'video',
          path: 'video',
          component: video
        },
        {
          name: 'collect',
          path: 'collect',
          component: collect
        },
        {
          name: 'user',
          path: 'user',
          component: user
        }
      ]
    }
  ]
})
