import Vue from 'vue'
import Router from 'vue-router'
// 引入模板
import Goods from '@/components/goods/goods'
import Ratings from '@/components/ratings/ratings'
import Seller from '@/components/seller/seller'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Goods
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: Ratings
    },
    {
      path: '/seller',
      name: 'Seller',
      component: Seller
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to)
  next()
})

export default router
