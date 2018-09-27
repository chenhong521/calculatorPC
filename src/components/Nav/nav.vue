<template>
  <div class="nav">
    <div class="nav-title">
      <img :src="src" alt="">
      <span>{{title}}</span>
    </div>
    <ul class="list">
      <slot name="list1"></slot>
    </ul>
    <ul class="list">
      <slot name="list2"></slot>
    </ul>
    <ul class="list">
      <slot name="list3"></slot>
    </ul>
    <ul class="list">
      <slot name="list4"></slot>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    src: String
  }
}
</script>
<style lang="less" scoped>
.nav{
  width: 300px;
  height: 1172px;
  margin-bottom: 30px;
  background-color: #ffffff;
  box-shadow: 2px 5px 8px 0px rgba(232, 232, 232, 1);
  .nav-title{
    width: 100%;
    height: 72px;
    line-height: 72px;
    border-bottom: 1px solid #ebebeb;
    span{
      font-size: 24px;
      color:#333333;
      vertical-align: middle;
      display: inline-block;
    }
    img{
      vertical-align: middle;
      padding-left: 18px;
    }
  }
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
}
</style>
