<template lang="html">
  <div class="row container">
    <div class="col-md-4">
      <h1>Genesis {{ this.$route.params.chapter }}</h1>
      <h2>General</h2>
    </div>
    <div class="col-md-8">
      <h1>
        {{ verses[verse] }}
      </h1>
      <p>{{ chapter }} : {{ verse }}</p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chapter: 1,
      verse: 1,
      verses: {
        '1': 'In the beginning, God created the heavens and the earth.',
        '2': 'The earth was without form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters.',
        '3': 'And God said, "Let there be light," and there was light.'
      }
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.verse = this.$route.query.verse
    this.chapter = this.$route.params.chapter
  },
  created () {
    this.verse = this.$route.query.verse
    this.chapter = this.$route.params.chapter
  }

}
</script>

<style lang="css">
</style>
