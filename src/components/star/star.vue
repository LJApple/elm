<template>
  <div class="star">
    <span v-for="" :class="itemClass"></span>
  </div>
</template>

<script type="text/ecmascirpt-6">
  export default {
    props: {
      size: {
        type: Number
      },
      score: {

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
