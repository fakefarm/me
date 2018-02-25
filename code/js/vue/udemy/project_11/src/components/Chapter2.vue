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
      chapter: 2,
      verses: {
        1: 'Thus the heavens and the earth were finished, and all the host of them.',
        2: 'And on the seventh day God finished his work that he had done, and he rested on the seventh day from all his work that he had done.',
        3: 'So God blessed the seventh day and made it holy, because on it God rested from all his work that he had done in creation.'
      }
    }
  }
}
</script>

<style lang="css">
</style>
