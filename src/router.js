import Vue from 'vue'
import Router from 'vue-router'
import Top from './components/pages/Top'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top,
      props: {
        title: 'Vue Template'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./components/pages/About')
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: () => import('./components/pages/TodoList')
    }
  ]
})
