import Vue from 'vue'
import Router from 'vue-router'
import Chapter1 from '@/components/Chapter1'
import Chapter2 from '@/components/Chapter2'
import Chapter from '@/components/Chapter'
import Verse from '@/components/Verse'
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
        { path: ':chapter', component: Chapter },
        { path: ':chapter/:verse', component: Verse }
      ]
    },
    {
      path: '/1',
      name: 'Chapter1',
      component: Chapter1
    },
    {
      path: '/2',
      name: 'Chapter2',
      component: Chapter2
    }
  ]
})
