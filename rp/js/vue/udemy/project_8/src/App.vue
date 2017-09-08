<template>
    <div class="container">
      <l-header></l-header>
      <l-content></l-content>
      <l-footer></l-footer>
    </div>
</template>

<script>
  import LHeader from './Components/Layout/Header.vue'
  import LFooter from './Components/Layout/Footer.vue'
  import LContent from './Components/Content/Layout.vue'
  export default {
    components: {
      LHeader,
      LFooter,
      LContent
    }
  };
</script>

<style>

</style>
