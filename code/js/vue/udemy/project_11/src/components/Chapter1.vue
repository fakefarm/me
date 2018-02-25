<template lang="html">
  <div class="row">
    <div class="col-md-4">
      <h2>Chapter {{ chapter }}</h2>
    </div>
    <div class="verses col">
      <div class="verse text-left" v-for='v in verses'>
        <p>{{ v }}</p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      chapter: 1,
      verses: {
        1: 'In the beginning, God created the heavens and the earth.',
        2: 'The earth was without form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters.',
        3: 'And God said, "Let there be light," and there was light.'
      }
    }
  },
  methods: {
    highlight () {
      debugger
    }
  }
}
</script>

<style lang="css">
</style>
