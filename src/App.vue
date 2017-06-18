<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '@/components/header/header.vue'

  const ERR_OK = 0

  export default {
    data () {
      return {
          seller: {}
      }
    },
    created () {
      this.$http.get('/api/seller').then((response) => {
        response = response.body
          if (response.errno === ERR_OK) {
            this.seller = response.data
            console.log(this.seller)
          }
      })
    },
    components: {
      'v-header': header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body
    font-size : 0.14rem;
  #app
    .tab
      display : flex
      width : 100%
      height : 0.8rem
      line-height : 0.8rem
      .item
        flex : 1
        text-align : center
        a
          display :block
          width : 100%
          font-size :0.18rem;
          color : rgb(78,85,93)
        .router-link-exact-active
          color : rgb(240,20,20)
</style>
