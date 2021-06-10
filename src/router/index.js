import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/Goods/Goods'
import Ratings from '@/components/Ratings/Ratings'
import Sellers from '@/components/Seller/Seller'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // 重新導向
      redirect: '/goods'
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
      // 選中後的類別
      component: Sellers
    }
  ],
  linkActiveClass: 'active'
})
