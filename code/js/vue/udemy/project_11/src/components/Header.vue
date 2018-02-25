<template lang="html">
  <header class='row'>
    <ul class="nav nav-pills col-7">
      <li v-for='link in links' class="nav-item">
        <router-link
          :to="{ name: link.to, path: link.path }"
          active-class='active'
          class="nav-link"
          :exact="link.exact">
          {{ link.name }}
        </router-link>
      </li>
    </ul>

    <div class="form-group col-5">
      <label >Go to Chapter</label>
      <select @change='chapterGo' class="form-control">
        <option readonly>select chapter</option>
        <option value='1'>chapter 1</option>
        <option value='1?verse=1'>chapter 1:1</option>
        <option value='1?verse=2'>chapter 1:2</option>
        <option value='1?verse=3'>chapter 1:3</option>
        <option value='2'>chapter 2</option>
      </select>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      links: [
        { name: 'Welcome', to: 'Welcome', exact: true },
        { name: 'Chapter1', to: 'Chapter1', exact: false },
        { name: 'Genesis', path: '/Genesis/2', exact: false },
        { name: 'Genesis', path: '/Genesis/1', exact: false },
        { name: 'Chapter2', to: 'Chapter2', exact: false }
      ]
    }
  },
  methods: {
    chapterGo () {
      // _dw select doesn't change... hmm why not?
      this.$router.push({path: '/genesis/' + event.target.value})
    }
  },
  watch: {
    '$router' (to, from) {
      this.$router.push({ path: to.path })
    }
  }
}
</script>

<style lang="css">
</style>
