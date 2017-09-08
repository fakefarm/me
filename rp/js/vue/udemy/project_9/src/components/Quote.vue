<template lang="html">
  <section>
    <div class="">
        <slot name='title'></slot>
        <slot></slot>
        <slot name='foreshadow'>PLACEHOLDER IF THERE IS NO SLOT NAMED foreshadow</slot>
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
