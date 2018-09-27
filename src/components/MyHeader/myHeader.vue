<template>
  <div class="header">
    <div class="header-top">
      <div class="header-top-content">
        <span class="guan">关注微信公众号：海华金融超市</span>
        <span class="phone">客服电话：400-969-0096</span>
        <span class="positioning">
          <img src="../../common/img/positioning.png" alt="定位">
          <span>福建福州鼓楼区八一七中路98号宇洋中央金地16层</span>
        </span>
      </div>
    </div>
    <div class="header-section">
      <div class="header-section-content">
        <img src="../../common/img/logo.png" alt="logo">
        <div class="header-search">
          <img src="../../common/img/webo.png" alt="">
          <img class="wechat" src="../../common/img/wechat.png" alt="">
          <input type="text" id="search" placeholder="请搜索相关计算器...">
          <input type="button" id="btn" value="搜索">
        </div>
      </div>
    </div>
    <div class="header-nav">
      <div class="header-nav-content">
        <router-link tag="div" class="tab-item" to="/home">
          <span class="tab-link">首页</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/loanfacility">
          <span class="tab-link">贷款工具</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/buytools">
          <span class="tab-link">买房工具</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/buycars">
          <span class="tab-link">买车工具</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/deposit">
          <span class="tab-link">存款工具</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/none#123">
          <span class="tab-link">贷款利率</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/none#143">
          <span class="tab-link">存款利率</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/none#1212">
          <span class="tab-link">工资工具</span>
        </router-link>
        <a class="tab-item" href="./public">
          <span class="tab-link">社区</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.header{
  width: 100%;
  min-width: 1200px;
  height: 222px;
  background-color: #f7f7f7;
  .header-top{
    width: 100%;
    min-width: 1200px;
    height: 32px;
    background-color: #eaeaea;
    .header-top-content{
      margin: 0 auto;
      width: 1200px;
      color: #808080;
      font-size: 12px;
      line-height: 32px;
      text-align: right;
      .phone{
        margin-left: 54px;
      }
      .positioning{
        margin-left: 54px;
        margin-right: 10px;
        img{
          display: inline-block;
          vertical-align: middle;
        }
        span{
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }
  .header-section{
    width:100%;
    min-width: 1200px;
    height: 120px;
    .header-section-content{
      width: 1200px;
      height: 120px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header-search{
        margin-right: 62px;
        font-size:0px;
        img{
          vertical-align:middle;
        }
        .wechat{
          margin-left: 10px;
          margin-right: 15px;
        }
        #search{
          width: 245px;
          height: 34px;
          vertical-align:middle;
          border: 1px solid #cccccc;
          font-size: 12px;
          box-sizing: border-box;
          padding-left: 10px;
          border-top-left-radius:3px;
          border-bottom-left-radius:3px;
        }
        #btn{
          width:59px;
          height: 34px;
          border: 1px solid #cccccc;
          vertical-align:middle;
          font-size: 12px;
           border-top-right-radius:3px;
          border-bottom-right-radius:3px;
          color: #808080;
        }
      }
    }
  }
  .header-nav{
    width: 100%;
    min-width: 1200px;
    height: 70px;
    background-color: #ee5223;
    .header-nav-content{
      width: 1200px;
      height: 70px;
      background-color: #ee5223;
      display: flex;
      line-height: 70px;
      margin: 0 auto;
      font-size: 20px;
      .tab-item {
        flex: 1;
        text-align: center;
        .tab-link {
          color: #ffffff;
          display: block;
          cursor:pointer;
        }
        &.router-link-active {
          .tab-link {
            color: #ee5223;
            background-color: #ffffff;
          }
        }
      }
    }
  }
}
</style>
