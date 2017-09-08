<template>
  <div class="col-xs-12 col-sm-6">
    <h1>
      {{ sizes.size }}
    </h1>
      <p>Inventory: {{ sizes.qty}}
      </p>
      <button @click='sell'>Sell!</button>
  </div>
</template>

<script>
  import { SizeController } from '../../main';
  export default {
    data () {
      return {
        sizes: {}
      }
    },
    methods: {
      sell () {
        this.sizes.qty = 0;
      }
    },
    created () {
      SizeController.$on('show', (data) => {
        this.sizes = data;
      })
    }
  }
</script>

<style scoped>
  div {
    background: yellow;
  }

</style>
