<template>
  <div class="col-xs-12 col-sm-6">
      <ul class="list-group">
          <li class="row size-row list-group-item"
            v-for="size in sizes"
            @click='show(size)'
            >
            <div class="col-sm-2">Size:</div>
            <div class="col-sm-3">{{ size.size }}</div>
            <div class="col-sm-7" v-if="size.stock">
              <Instock :size="size"></Instock>
            </div>
            <div class="col-sm-7" v-else="size.stock">
              <p>SOLD OUT!</p>
            </div>
          </li>
      </ul>
  </div>
</template>

<script>
  import { SizeController } from '../../main';
  import { Instock } from './Instock.vue';
  export default {
    components: {
      Instock
    },
    data () {
      return {
        sizes: [
          { id: 1, size: 'small', qty: 36, stock: true },
          { id: 2, size: 'medium', qty: 72, stock: true },
          { id: 3, size: 'large', qty: 144, stock: true },
        ]
      }
    },
    methods: {
      show (size) {
        SizeController.show(size);
      }
    }
  }
</script>

<style scoped>
  .size-row:hover {
    background: #eee;
    cursor: pointer;
  }
</style>
