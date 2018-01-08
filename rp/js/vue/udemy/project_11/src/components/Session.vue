<template lang="html">
</template>

<script>
  export const UserSession = new Vue({
    data () {
      return {
        current_user: 'dave',
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
            alert('no')
          }())
        }
      }
    }
  })
</script>

<style lang="css">
</style>
