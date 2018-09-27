<template>
  <div class="swiper">
    <el-carousel :interval="3000"  height="60px" >
      <el-carousel-item>
        <div class="swiper-item">
          <img :src="a.logo" alt="" v-for="(a, index) in item1" :key="index">
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="swiper-item">
          <img :src="a.logo" alt="" v-for="(a, index) in item2" :key="index">
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data () {
    return {
      item1: [
        {logo: require('../../common/img/gf.png')},
        {logo: require('../../common/img/zg.png')},
        {logo: require('../../common/img/ms.png')},
        {logo: require('../../common/img/zs.png')},
        {logo: require('../../common/img/zx.png')}
      ],
      item2: [
        {logo: require('../../common/img/pf.png')},
        {logo: require('../../common/img/gs.png')},
        {logo: require('../../common/img/ny.png')},
        {logo: require('../../common/img/zx.png')},
        {logo: require('../../common/img/zs.png')}
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.swiper{
  width: 1200px;
  margin: 0 auto;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 60px;
    margin: 0;
  }
.el-carousel__item:nth-child(2n) {
  background-color: #ffffff;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #ffffff;
}
</style>
