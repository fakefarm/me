<template lang="html">
  <span>
    <div class="col-sm-2">Quantity:</div>
    <div class="col-sm-4">{{ size.qty }}</div>
    <div class="col-sm-1">{{ stock(size)  }}</div>
  </span>
</template>

<script>
export default {
  props: ['size'],
  methods: {
    stock (size) {
      if (size.qty <= 0) {
        size.stock = false;
      }
    }
  }
}
</script>

<style lang="css">
</style>
