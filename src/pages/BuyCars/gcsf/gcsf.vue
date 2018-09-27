<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item >买车工具</el-breadcrumb-item>
      <el-breadcrumb-item >购车税费计算器</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content-banner">
      <img src="../../../common/img/hhjr.png" alt="hhjr" width="100%">
    </div>
    <span class="content-title">购车税费计算器</span>
    <div class="content-paper">
      <p style="font-size:22px;color:#666666;margin-bottom:15px;">工具简介：</p>
      <p style="width:796px;height:40px;font-size:14px;line-height:22px;color:#666666;">购车计算器用于计算准确的全款买车相关费用信息。</p>
    </div>
    <div class="content-form">
      <div class="form-input">
        <h1><img src="../../../common/img/input.png" alt=""><span>输入数据</span></h1>
        <div class="shuju">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px">
            <el-form-item label="所在地：">
              <el-select v-model="cityValue" placeholder="请选择">
                <el-option-group
                  v-for="group in options3"
                  :key="group.label"
                  :label="group.label">
                  <el-option
                    v-for="item in group.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-option-group>
              </el-select>
            </el-form-item>
            <el-form-item label="车价：" prop="price">
              <el-input v-model.number="ruleForm.price">
                <span slot="suffix">万元</span>
              </el-input>
            </el-form-item>
            <el-form-item label="座位数：" prop="type">
              <el-radio-group v-model="ruleForm.type">
                <el-radio label="0">6座以下</el-radio>
                <el-radio label="1">6座及以上</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即计算</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="form-output" id="form-output">
        <h1><img src="../../../common/img/output.png" alt=""><span>输出结果</span></h1>
        <div class="result">
          <!-- <div class="result-left">
            <h1>每月等额还款(等额本息)</h1>
            <table border="1">
              <tr >
                <td width="114px" height="46px" bgcolor="#f8f8f8" style="text-align: center">贷款总额：</td>
                <td width="205px" height="46px" style="padding-right:20pxtext-align:right">{{this.resultEd}}元</td>
              </tr>
                <tr>
                <td width="114px" height="46px" bgcolor="#f8f8f8" style="text-align: center">还款月数：</td>
                <td width="205px" height="46px" style="padding-right:20pxtext-align:right">{{this.resultRegion}}月</td>
              </tr>
                <tr>
                <td width="114px" height="68px" bgcolor="#f8f8f8" style="text-align: center">每月还款：</td>
                <td width="205px" height="46px" style="padding-right:20pxtext-align:right"><span style="color:#ff0000">{{this.resultRepayment}}</span>元</td>
              </tr>
                <tr>
                <td width="114px" height="46px" bgcolor="#f8f8f8" style="text-align: center">总支付利息：</td>
                <td width="205px" height="46px" style="padding-right:20pxtext-align:right"><span style="color:#ff0000">{{this.Totalinterestpayments}}</span>元</td>
              </tr>
                <tr>
                <td width="114px" height="46px" bgcolor="#f8f8f8" style="text-align: center">本息合计：</td>
                <td width="205px" height="46px" style="padding-right:20pxtext-align:right"><span style="color:#ff0000">{{this.total}}</span>元</td>
              </tr>
            </table>
          </div>
          <div class="result-right">
            <h1>逐月递减还款(等额本金)</h1>
            <table border="1">
              <tr >
                <td width="114px" height="46px" bgcolor="#f8f8f8" style="text-align: center">贷款总额：</td>
                <td width="205px" height="46px" style="padding-right:20pxtext-align:right">{{this.resultEd}}元</td>
              </tr>
                <tr>
                <td width="114px" height="46px" bgcolor="#f8f8f8" style="text-align: center">还款月数：</td>
                <td width="205px" height="46px" style="padding-right:20pxtext-align:right">{{this.resultRegion}}月</td>
              </tr>
                <tr>
                <td width="114px" height="68px" bgcolor="#f8f8f8" style="text-align: center">首月还款：</td>
                <td width="205px" height="46px" style="padding-right:20pxtext-align:right"><span style="color:#ff0000">{{this.resultOneRepayment}}</span>元<br><span style="color:#cccccc">每月递减：{{this.descending}}元</span></td>
              </tr>
                <tr>
                <td width="114px" height="46px" bgcolor="#f8f8f8" style="text-align: center">总支付利息：</td>
                <td width="205px" height="46px" style="padding-right:20pxtext-align:right"><span style="color:#ff0000">{{this.Totalinterestpayments2}}</span>元</td>
              </tr>
                <tr>
                <td width="114px" height="46px" bgcolor="#f8f8f8" style="text-align: center">本息合计：</td>
                <td width="205px" height="46px" style="padding-right:20pxtext-align:right"><span style="color:#ff0000">{{this.total2}}</span>元</td>
              </tr>
            </table>
          </div> -->
          <el-collapse v-model="activeNames">
            <el-collapse-item :title="'基本税费 ¥ '+ basicTax +' 元'" name="1">
              <table cellpadding="0" cellspacing="0" class="tbl gcbx_tb">
                <tbody>
                  <tr>
                    <td width="180">购置税</td>
                    <td width="350">&nbsp;</td>
                    <td width="158" class="tdv">{{tax}}元</td>
                  </tr>
                    <tr>
                        <td>上牌费用</td>
                        <td>&nbsp;</td>
                        <td class="tdv">{{ShangPaiFei}}元</td>
                    </tr>
                    <tr>
                      <td>车船使用税</td>
                      <td>
                          <ul class="pllist">
                            <el-radio-group @change="show(pllist)" v-model="pllist" >
                              <li><el-radio label="1" >1.0L(含)以下</el-radio></li>
                              <li><el-radio label="2">1.0-1.6L(含)</el-radio></li>
                              <li><el-radio label="3">1.6-2.0L(含)</el-radio></li>
                              <li><el-radio label="4">2.0-2.5L(含)</el-radio></li>
                              <li><el-radio label="5">2.5-3.0L(含)</el-radio></li>
                              <li><el-radio label="6">3.0-4.0L(含)</el-radio></li>
                              <li><el-radio label="7">4.0L以上</el-radio></li>
                            </el-radio-group>
                          </ul>
                      </td>
                      <td class="tdv">{{vessel}}元</td>
                  </tr>
                  <tr>
                      <td class="lhtd">交强险</td>
                      <td class="lhtd">&nbsp;</td>
                      <td class="tdv">{{Compulsory}}元</td>
                  </tr>
                </tbody>
              </table>
            </el-collapse-item>
            <el-collapse-item :title="'商业保险 ¥ '+ insuranceExpense +' 元'" name="2">
              <table cellpadding="0" cellspacing="0" class="tbl gcbx_tb">
                <tbody>
                  <tr>
                    <td width="180">第三者责任险</td>
                    <td width="350" style="line-height:22px">
                        赔付额度：<br>
                        <ul class="pflist">
                            <li><el-radio v-model="pflist" label="1">5万</el-radio></li>
                            <li><el-radio v-model="pflist" label="2">10万</el-radio></li>
                            <li><el-radio v-model="pflist" label="3">15万</el-radio></li>
                            <li><el-radio v-model="pflist" label="4">20万</el-radio></li>
                            <li><el-radio v-model="pflist" label="5">30万</el-radio></li>
                            <li><el-radio v-model="pflist" label="6">50万</el-radio></li>
                            <li><el-radio v-model="pflist" label="7">100万</el-radio></li>
                        </ul>
                    </td>
                    <td width="158" class="tdv">{{0}}元</td>
                  </tr>
                  <tr>
                    <td>车辆损失险</td>
                    <td>&nbsp;</td>
                    <td class="tdv">{{0}}元</td>
                  </tr>
                  <tr>
                    <td>全车强盗险</td>
                    <td>&nbsp;</td>
                    <td class="tdv">{{0}}元</td>
                  </tr>
                  <tr>
                    <td>玻璃单独破碎险</td>
                    <td>
                      <el-radio-group v-model="jkgc">
                        <el-radio label="0">进口</el-radio>
                        <el-radio label="1">国产</el-radio>
                      </el-radio-group>
                    </td>
                    <td class="tdv">{{0}}元</td>
                  </tr>
                  <tr>
                    <td>自燃损失险</td>
                    <td>&nbsp;</td>
                    <td class="tdv">{{0}}元</td>
                  </tr>
                  <tr>
                    <td>不计免赔特约险</td>
                    <td>&nbsp;</td>
                    <td class="tdv">{{0}}元</td>
                  </tr>
                  <tr>
                    <td>无过责任险</td>
                    <td>&nbsp;</td>
                    <td class="tdv">{{0}}元</td>
                  </tr>
                  <tr>
                    <td>车上人员责任险</td>
                    <td>投保人数 {{0}} 人</td>
                    <td class="tdv">{{0}}元</td>
                  </tr>
                  <tr>
                    <td class="lhtd">车身划痕险</td>
                    <td class="lhtd" style="line-height:22px">
                      赔付额度：<br>
                      <ul class="pflist">
                        <li><el-radio v-model="ppflist" label="1">2千</el-radio></li>
                        <li><el-radio v-model="ppflist" label="2">5千</el-radio></li>
                        <li><el-radio v-model="ppflist" label="3">1万</el-radio></li>
                        <li><el-radio v-model="ppflist" label="4">2万</el-radio></li>
                      </ul>
                    </td>
                    <td class="tdv">{{0}}元</td>
                  </tr>
                </tbody>
              </table>
            </el-collapse-item>
            <el-collapse-item :title="'购车总费用 ¥ '+total+' 元'" name="3">
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="form-bottom"><img src="../../../common/img/276473625106652431.png" alt=""><span>此结果仅供参考，实际应缴费以当地为准</span></div>
      </div>
    </div>
  </div>
</template>
<script>
import city from '../../../common/js/city'
export default {
  data () {
    return {
      options3: city.options3,
      cityValue: '福州',
      activeNames: ['1'],
      pllist: '1',
      pflist: '1',
      ppflist: '1',
      jkgc: '0',
      ruleForm: {
        price: '',
        type: '0'
      },
      basicTax: 0,
      insuranceExpense: 0,
      total: 0,
      tax: 0, // 购置税
      ShangPaiFei: 0, // 上牌费
      Compulsory: 0, // 交强险,
      vessel: 0, // 车船税
      rules: {
        price: [
          { required: true, message: '请输入车价' },
          { type: 'number', message: '车价必须为数值' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // console.log(this.ruleForm)
          // 购置税＝购车款/(1+17%)×购置税率(10%)
          this.tax = parseInt(this.ruleForm.price * 10000 / (1 + 0.17) * 0.1)
          this.ShangPaiFei = 500
          if (this.ruleForm.type === '0') {
            this.Compulsory = 950
          } else {
            this.Compulsory = 1100
          }
          // console.log(this.tax)
          this.pllist = '1'
          this.vessel = 300
          this.basicTax = this.tax + this.ShangPaiFei + this.Compulsory + this.vessel
        } else {
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
      this.resultEd = 0
      this.resultRegion = 0
      this.resultRepayment = 0
      this.Totalinterestpayments = 0
      this.total = 0
      this.resultOneRepayment = 0
      this.descending = 0
      this.Totalinterestpayments2 = 0
      this.total2 = 0
      // console.log(this.ruleForm.type)
    },
    show (pllist) {
      switch (pllist) {
        case '1': this.vessel = 300
          break
        case '2': this.vessel = 420
          break
        case '3': this.vessel = 480
          break
        case '4': this.vessel = 900
          break
        case '5': this.vessel = 1920
          break
        case '6': this.vessel = 3480
          break
        case '7': this.vessel = 5280
          break
      }
    }
  },
  watch: {
    vessel (a) {
      this.basicTax = this.tax + this.ShangPaiFei + this.Compulsory + a
      return this.basicTax
    }
  }
}
</script>
<style lang='less' scoped>
.breadcrumb {
  margin-bottom: 16px;
}
.content-banner {
  height: 174px;
  width: 100%;
  margin-bottom: 15px;
}
.content-title {
  display: inline-block;
  font-size: 22px;
  line-height: 41px;
  height: 41px;
  box-sizing: border-box;
  color: #ffffff;
  padding: 0 20px;
  background-color: #ee5223;
  text-align: center;
  border-radius: 10px;
  margin-bottom: 25px;
}
.content-paper {
  width: 100%;
  box-sizing: border-box;
  padding-left: 31px;
  margin-bottom: 28px;
}
.content-form {
  width: 864px;
  // height: 828px;
  background-color: #ffffff;
  box-sizing: border-box;
  padding-top: 14px;
  padding-left: 11px;
  box-shadow: 2px 5px 8px 0px #e8e8e8;
  .form-input {
    h1 {
      color: #666666;
      font-size: 20px;
      margin-bottom: 34px;
      img {
        vertical-align: middle;
        margin-right: 5px;
      }
      span {
        display: inline-block;
        vertical-align: middle;
      }
    }
    .shuju {
      width: 400px;
      margin-left: 179px;
      .el-select {
        width: 100%;
      }
    }
  }
  .form-output {
    // height: 414px;
    h1 {
      color: #666666;
      font-size: 20px;
      margin-bottom: 14px;
      img {
        vertical-align: middle;
        margin-right: 5px;
      }
      span {
        display: inline-block;
        vertical-align: middle;
      }
    }
    .result {
      box-sizing: border-box;
      margin-left: 40px;
      width: 791px;
      // background-color: red;
      // display: flex;
      // justify-content: space-around;
    }
    .form-bottom {
      width: 100%;
      height: 50px;
      line-height: 50px;
      color: #999999;
      img {
        vertical-align: middle;
      }
      span {
        display: inline-block;
        vertical-align: middle;
        font-size: 16px;
      }
    }
  }
}
.tbl {
  border: solid #d5d5d5;
  border-width: 1px;
}
table {
  font-size: 14px;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}
td {
  border: solid #d5d5d5;
  border-width: 0 1px 1px 0;
  height: 25px;
  text-align: center;
  vertical-align: middle;
}
</style>
