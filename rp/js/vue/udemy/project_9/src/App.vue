<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
          <quote :quote='quote'></quote>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from './components/Quote.vue'
export default {
  data () {
    return {
      quote: 'Dry details are interesting to the devoted'
    }
  },
  components: {
    Quote
  }
}
</script>

<style lang="css">
</style>
