import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/views/content/content'
import LOGIN from '@/views/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/content',
      name: 'Content',
      component: Content
    },
    {
      path: '/',
      name: 'LOGIN',
      component: LOGIN
    }
  ]
})
