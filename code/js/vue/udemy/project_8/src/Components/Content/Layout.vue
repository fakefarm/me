<template>
  <section>
    <hr>
    <div class="row">
        <server-index></server-index>
        <server-show></server-show>
    </div>
    <hr>
  </section>
</template>

<script>
  import ServerIndex from './Index.vue'
  import ServerShow from './Show.vue'
  export default {
    components: {
      'server-index': ServerIndex,
      'server-show': ServerShow
    }
  }
</script>
