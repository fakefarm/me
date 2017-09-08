<template lang="html">
  <section>
    <div class="">
        <slot name='title'></slot>
        <slot name='content'></slot>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  section {
    padding: 30px;
    margin: 30px 0;
    text-align: center;
  }
</style>
