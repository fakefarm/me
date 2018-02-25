<template lang="html">
  <section>
    <div class="">
        <slot name='title'></slot>
        <slot></slot>
        <h1>BOOM</h1>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="css" scoped>
  section {
    padding: 30px;
    margin: 30px 0;
    text-align: center;
  }
</style>
