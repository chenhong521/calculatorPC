<template>
  <div class="loanfacillity">
    <div class="loanfacillity-content">
      <Nav :title="title" :src="src">
        <div slot="list1">
          <router-link tag="li" to="/loanfacility/dkgg"><span class="a">贷款工具</span></router-link>
          <router-link tag="li" to="/loanfacility/sjjs"><span class="a">身价计算器</span></router-link>
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
      title: '贷款工具',
      src: require('../../common/img/loan.png')
    }
  },
  components: {
    Nav
  }
}
</script>
<style lang="less" scoped>
.loanfacillity{
  width: 100%;
  min-width: 1200px;
  background-color: #f7f7f7;
  .loanfacillity-content{
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
