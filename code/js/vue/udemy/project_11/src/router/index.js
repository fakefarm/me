import Vue from 'vue'
import Router from 'vue-router'
import Chapter1 from '@/components/Chapter1'
import Chapter2 from '@/components/Chapter2'
import Chapter from '@/components/Chapter'
import General from '@/components/General'
import Welcome from '@/components/Welcome'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/genesis',
      name: 'General',
      component: General,
      children: [
        { path: ':chapter', component: Chapter }
      ]
    },
    {
      path: '/1',
      name: 'Chapter1',
      component: Chapter1,
      meta: { public: true }
    },
    {
      path: '/2',
      name: 'Chapter2',
      component: Chapter2,
      meta: { public: true }
    }
  ]
})
