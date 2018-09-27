import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/home'
import BuyTools from '@/pages/BuyTools/buytools'
import BuyCars from '@/pages/BuyCars/BuyCars'
import Deposit from '@/pages/Deposit/deposit'
import LoanFacility from '@/pages/LoanFacility/loanfacility'
import fdjs from '@/pages/BuyTools/fdjs/fdjs.vue'
import gjj from '@/pages/BuyTools/gjj/gjj.vue'
import esf from '@/pages/BuyTools/esf/esf.vue'
import dkgg from '@/pages/loanfacility/dkgg/dkgg.vue'
import sjjs from '@/pages/loanfacility/sjjs/sjjs.vue'
import None from '@/components/None/none'
import zhjs from '@/pages/BuyTools/zhjs/zhjs'
import Cd from '@/pages/BuyCars/cd/cd'
import gcsf from '@/pages/BuyCars/gcsf/gcsf'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/none',
      component: None
    },
    {
      path: '/buytools',
      name: 'BuyTools',
      component: BuyTools,
      children: [
        {
          path: '/buytools/',
          component: fdjs
        },
        {
          path: '/buytools/fdjs',
          component: fdjs
        },
        {
          path: '/buytools/gjj',
          component: gjj
        },
        {
          path: '/buytools/esf',
          component: esf
        },
        {
          path: '/buytools/zhjs',
          component: zhjs
        }
      ]
    },
    {
      path: '/loanfacility',
      name: 'LoanFacility',
      component: LoanFacility,
      children: [
        {
          path: '/loanfacility/',
          component: dkgg
        },
        {
          path: '/loanfacility/dkgg',
          component: dkgg
        },
        {
          path: '/loanfacility/sjjs',
          component: sjjs
        }
      ]
    },
    {
      path: '/buycars',
      name: 'BuyCars',
      component: BuyCars,
      children: [
        {
          path: '/buycars/',
          name: gcsf,
          component: gcsf
        },
        {
          path: '/buycars/cd',
          component: Cd
        },
        {
          path: '/buycars/gcsf',
          component: gcsf
        }
      ]
    },
    {
      path: '/deposit',
      name: 'Deposit',
      component: Deposit
    }
  ]
})
