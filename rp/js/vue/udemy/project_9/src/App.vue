<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="row">
          <button @click="selectedComponent = 'Quote'">Quote</button>
          <button @click="selectedComponent = 'Author'">Author</button>
          <button @click="selectedComponent = 'New'">New</button>
          <hr>
          <component :is="selectedComponent">
            <p>AND WE EVEN HAVE SLOTES</p>
            <h1 slot='title'>TITLE AFTER P! WHOA! even though I wrote this after, the slot position in the child slot actually places this. that's amazing. So technically, I probably don't even need to have a h1. let me try with an h1</h1>
          </component>
          <!-- <quote>
            coming soon.
          </quote> -->


        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from './components/Quote.vue'
import Author from './components/Author.vue'
import New from './components/New.vue'
export default {
  data () {
    return {
      selectedComponent: 'Quote'
    }
  },
  components: {
    Quote,
    Author,
    New
  }
}
</script>

<style lang="css">
</style>
