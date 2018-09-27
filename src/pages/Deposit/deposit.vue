<template>
  <div class="buytools">
    <div class="buytools-content">
      <Nav :title="title" :src="src">
        <div slot="list1">
          <router-link tag="li" to="/deposit/#1"><span class="a">存款利率计算器</span></router-link>
          <router-link tag="li" to="/deposit/#2"><span class="a">活期存款利率计算器</span></router-link>
          <router-link tag="li" to="/deposit/#3"><span class="a">定期存款利率计算器</span></router-link>
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
      title: '存款工具',
      src: require('../../common/img/tixian.png')
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
  // height: 1250px;
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
