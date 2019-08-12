import Vue from 'vue'
import Router from 'vue-router'
import Top from './components/templates/Top'

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
      component: () => import('./components/templates/About')
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: () => import('./components/templates/TodoList')
    }
  ]
})
