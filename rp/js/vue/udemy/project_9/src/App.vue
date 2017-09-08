<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="row">
          <quote>
            <div class="col-sm-6" slot='title'>
              <h1>Dry details are interesting to the devoted</h1>
              <cite>Dave Woodall</cite>
            </div>
            <div class="col-sm-6">
              <h2>Default slots</h2>
            </div>
          </quote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from './components/Quote.vue'
export default {
  data () { },
  components: {
    Quote
  }
}
</script>

<style lang="css">
</style>
