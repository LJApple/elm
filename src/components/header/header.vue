<template>
  <div class="header">
    <div class="content_wrapper">
      <div class="avatar">
        <img :src="seller.avatar" alt=""/>
      </div>
      <div class="content">
        <div class="content_top">
          <span></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="content_center">
          <span>{{seller.description}}</span>/
          <span>{{seller.deliveryTime}}</span>分钟送达
        </div>
      </div>
    </div>


    <div class="news"></div>
  </div>
</template>

<script type="text/ecmascirpt-6">
  export default {
    props: {
      seller: {

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    height : 2.66rem
    background-color :rgba(1,17,27,0.5)
    .content_wrapper
      padding :0.48rem 0.48rem 0.36rem 0.32rem
      .avatar > img
        height:1.28rem
        width : 1.28rem
        border-radius :0.04rem

</style>
