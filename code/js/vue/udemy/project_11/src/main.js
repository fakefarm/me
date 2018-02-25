// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

export const UserSession = new Vue({
  data () {
    return {
      current_user: false,
      email: 'dave@woodalls.me',
      role: 'user'
    }
  },
  methods: {
    loggedIn () {
      if (this.current_user) {
        return true
      } else {
        return (function () {
          return false
        }())
      }
    }
  }
})

export const PublicRoutes = new Vue({
  data () {
    return {
      pages: {
        'Chapter1': true,
        'Welcome': true
      }

    }
  },
  methods: {
    allowed (to) {
      if (this.pages[to.name]) {
        return true
      } else {
        return false
      }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

Vue.use(UserSession)

router.beforeEach((to, from, next) => {
  // _dw global before_filter
  if (UserSession.loggedIn()) {
    next()
  } else if (PublicRoutes.allowed(to)) {
    next()
  } else if (to.meta.public) {
    next()
  } else {
    next('/')
  }
})
