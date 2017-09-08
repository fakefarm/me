<template lang="html">
  <div class="">
    <p>{{ quote }}</p>
  </div>
</template>

<script>
export default {
  props: ['quote']
}
</script>

<style lang="css" scoped>
  div {
    border: 1px solid #aaa;
    border-radius: 5px;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
    font-size: 3em;
  }
</style>
