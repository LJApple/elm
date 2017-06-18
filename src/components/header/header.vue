<!-- header -->
<template>
  <div class="header">
    <div class="content_wrapper">
      <div class="avatar">
        <img :src="seller.avatar" alt=""/>
      </div>
      <div class="content">
        <div class="content_top">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="content_center">
          <span>{{seller.description}}</span>
          <span>/{{seller.deliveryTime}}分钟送达</span>
        </div>
        <!--v-if
           确保条件块在切换当中合适的销毁与重建条件块内额的事件监听和子组件，
           v-if 是惰性的，如果为false
           ，则什么也不错-不编译，不渲染。 当第一次条件为真时，才开始编译。
        -->
        <ul class="content_bottom" v-if="seller.supports">
          <li class="support-item" v-for="(item, index) in seller.supports">
            <span class="icon" :class="classMap[seller.supports[index].type]"></span>
            <span class="text">{{seller.supports[index].description}}</span>
          </li>
        </ul>
        <div class="support_count" v-if="seller.supports" >
          <span class="count">{{seller.supports.length}}个</span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
      </div>
    </div>
    <div class="bulletin_wrapper" @click="showDetail">
      <span class="bulletin_title"></span>
      <span class="bulletin_text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <div class="detail" v-show="detailShow">
        <div class="detail_wrapper clearfix">
          <div class="detail_main">
            <h1 class="name">{{seller.name}}</h1>

          </div>
        </div>
        <div class="detail_close" @click="hideDetail()">
          <i class="icon-close"></i>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascirpt-6">
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        detailShow: false
      }
    },
    methods: {
      showDetail() {
        this.detailShow = true
      },
      hideDetail() {
        this.detailShow = false
      }
    },
    created() {
      this.classMap = ['decrease','discount','guarantee','invoice','special']
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .header
    height : 2.69rem
    background-color :rgba(1,17,27,0.5)
    overflow: hidden
    position :relative
    .content_wrapper
      padding :0.48rem 0 0.36rem 0.32rem
      position :relative
      .avatar
        display :inline-block
        img
          height:1.28rem
          width : 1.28rem
          border-radius :0.04rem
      .content
        margin-left :0.32rem
        display inline-block
        vertical-align :top
        .content_top
          font-size:0
          .brand
            display :inline-block
            vertical-align :top
            height :0.36rem
            width :0.6rem
            bg-image('brand')
            background-size :0.6rem 0.36rem
            background-repeat :no-repeat
          .name
            display :inline-block
            font-size :0.32rem
            color :rgb(255,255,255)
            font-weight :bold
            line-height :0.36rem
            margin-left :0.12rem
        .content_center
          font-size :0
          padding :0.16rem 0 0.2rem 0
          span
            display :inline-block;
            font-size :0.24rem
            color :rgb(255,255,255)
            font-weight :200
            line-height :0.24rem


        .content_bottom
          height :0.24rem
          overflow :hidden
          .icon
            display :inline-block
            width :0.24rem
            height :0.24rem
            margin-right :0.04rem
            background-size :0.24rem 0.24rem
            background-repeat :no-repeat
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.guarantee
              bg-image('guarantee_1')
            &.invoice
              bg-image('invoice_1')
            &.special
              bg-image('special_1')
          .text
            vertical-align :top
            line-height :0.24rem
            font-size: 0.2rem
            font-weight :200
            color :rgb(255,255,255)

      .support_count
        position :absolute
        right :0.24rem
        bottom :0.28rem
        height :0.48rem
        line-height :0.48rem
        text-align: center
        padding:0 0.16rem
        border-radius :0.28rem
        background-color :rgba(0,0,0,0.2)
        color :rgb(255,255,255)
        font-size :0
        box-sizing :border-box
        .count
          font-size :0.2rem
          font-weight :200
          line-height :0.48rem
        .icon-keyboard_arrow_right
          font-size :0.2rem
          margin-left :0.04rem
          line-height :0.48rem

    .bulletin_wrapper
      position :relative
      height :0.56rem
      font-size:0.2rem
      font-weight :200
      line-height: 0.56rem
      overflow :hidden
      white-space :nowrap
      text-overflow :ellipsis
      padding:0 0.48rem 0 0.24rem
      color :rgb(255,255,255)
      background-color :rgba(7,17,27,0.2)
      .bulletin_title
        display: inline-block
        vertical-align: top
        margin-top: 0.16rem
        width: 0.44rem
        height: 0.24rem
        bg-image('bulletin')
        background-size: 0.44rem 0.24rem
        background-repeat: no-repeat
      .bulletin_text
        vertical-align: top
        margin: 0 0.16rem
        font-size: 0.2rem
        color :rgb(255,255,255)
      .icon-keyboard_arrow_right
        position: absolute
        font-size: 0.02rem
        right: 0.24rem
        top: 0.16rem
        color :rgb(255,255,255)

    .background
      position :absolute
      top :0
      left :0
      width :100%
      height :100%
      z-index: -1
      filter :blur(0.2rem)
    .detail
      position :fixed
      z-index :100
      top :0
      left: 0
      width :100%
      height:100%
      overflow :auto
      backdrop-filter :blur(0.2rem)
      background: rgba(7, 17, 27, 0.8)
      .detail_wrapper
        width :100%
        min-height :100%
        .detail_main
          margin-top :1.28rem
          padding-bottom :1.28rem
          .name
            line-height: 0.32rem
            text-align: center
            font-size: 0.32rem
            font-weight: 700
            color: #fff
          .star-wrapper
            margin-top: 18px
            padding: 2px 0
            text-align: center
          .title
            display: flex
            width: 80%
            margin: 28px auto 24px auto
            .line
              flex: 1
              position: relative
              top: -6px
              border-bottom: 1px solid rgba(255, 255, 255, 0.2)
            .text
              padding: 0 12px
              font-weight: 700
              font-size: 14px
      .detail_close
        position :relative
        height :0.64rem
        width :0.64rem
        margin :-1.28rem auto 0 auto
        clear: both
        font-size: 0.64rem
        color: rgba(255,255,255,0.5)
</style>
