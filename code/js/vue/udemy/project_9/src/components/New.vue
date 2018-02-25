<template lang="html">
  <section>
    <div class="">
      <h2>New Quote</h2>
      <p>Count = {{ boom }}</p>
      <button @click='boom++'>count</button>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      boom: 0
    }
  },
  deactivated () {
    alert('deactivated' + this);
  },
  activated () {
    alert('activated' + this);

  }
}
</script>

<style lang="css" scoped>

</style>
