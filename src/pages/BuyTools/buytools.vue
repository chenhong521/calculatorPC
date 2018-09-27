<template>
  <div class="buytools">
    <div class="buytools-content">
      <Nav :title="title" :src="src">
        <div slot="list1">
          <li class="item1">月供计算</li>
          <router-link tag="li" to="/buytools/fdjs"><span class="a">房贷计算器</span></router-link>
          <router-link tag="li" to="/buytools/gjj"><span class="a">公积金贷款计算器</span></router-link>
          <router-link tag="li" to="/buytools/zhjs"><span class="a">组合计算器</span></router-link>
          <router-link tag="li" to="/buytools/esf"><span class="a">二手房贷款计算器</span></router-link>
        </div>
        <div slot="list2">
          <li class="item1">费率计算</li>
          <router-link tag="li" to="/buytools/#5"><span class="a">营改增税费计算器</span></router-link>
          <router-link tag="li" to="/buytools/#6"><span class="a">二手房交易税费计算器</span></router-link>
          <router-link tag="li" to="/buytools/#7"><span class="a">房产税计算器</span></router-link>
          <router-link tag="li" to="/buytools/#8"><span class="a">上海房产税计算器</span></router-link>
          <router-link tag="li" to="/buytools/#9"><span class="a">重庆房产税计算器</span></router-link>
        </div>
        <div slot="list3">
          <li class="item1">限购政策</li>
          <router-link tag="li" to="/buytools/#10"><span class="a">首二套测试</span></router-link>
          <router-link tag="li" to="/buytools/#11"><span class="a">购房资格测试</span></router-link>
        </div>
        <div slot="list4">
          <li class="item1">还款工具</li>
          <router-link tag="li" to="/buytools/#12"><span class="a">等额本金还款计算器</span></router-link>
          <router-link tag="li" to="/buytools/#13"><span class="a">等额本息还款计算器</span></router-link>
          <router-link tag="li" to="/buytools/#14"><span class="a">剩余还款计算器</span></router-link>
          <router-link tag="li" to="/buytools/#15"><span class="a">还款方式比较器</span></router-link>
          <router-link tag="li" to="/buytools/#16"><span class="a">提前还款计算器</span></router-link>
        </div>
      </Nav>
      <div class="content-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Nav from '../../components/Nav/nav'
export default {
  data () {
    return {
      title: '买房工具',
      src: require('../../common/img/syjj.png')
    }
  },
  components: {
    Nav
  }
}
</script>
<style lang="less" scoped>
.buytools{
  width: 100%;
  min-width: 1200px;
  background-color: #f7f7f7;
  .buytools-content{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-direction:row;
    .list{
    // margin: 10px 0;
    li{
      width: 232px;
      height: 54px;
      line-height: 54px;
      margin-left: 68px;
      border-bottom: 1px solid #ebebeb;
      font-size: 20px;
      color:#333333;
      .a{
        color: #4d4d4d;
        cursor:default;
        font-size: 16px;
        padding-left: 16px;
      }
      &.router-link-active {
        .a{
          color:#ee5223;
        }
      }
    }
  }
    .content-right{
      padding-left: 31px;
      padding-top: 16px;
      margin-bottom: 16px;
      box-sizing: border-box;
      width: 895px;
      background-color: #f7f7f7;
    }
  }
}
</style>
