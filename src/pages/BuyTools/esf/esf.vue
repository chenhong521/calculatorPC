<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item >买房工具</el-breadcrumb-item>
      <el-breadcrumb-item >月供计算</el-breadcrumb-item>
      <el-breadcrumb-item >二手房贷款计算器</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content-banner">
      <img src="../../../common/img/hhjr.png" alt="hhjr" width="100%">
    </div>
    <span class="content-title">二手房贷款计算器</span>
    <div class="content-paper">
      <p style="font-size:22px;color:#666666;margin-bottom:15px;">工具简介：</p>
      <p style="width:796px;height:40px;font-size:14px;line-height:22px;color:#666666;">二手房贷款计算器可帮助用户计算在购买二手房申请商业贷款时,选择等额本金和等额本息等不同的还款方式后,各自需要偿还的月供、利息总额和还款总额。</p>
    </div>
    <div class="content-form">
      <div class="form-input">
        <h1><img src="../../../common/img/input.png" alt=""><span>输入数据</span></h1>
        <div class="shuju">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="计算方式：" prop="type">
              <el-radio-group v-model="ruleForm.type">
                <el-radio label="按贷款额度计算" value="0"></el-radio>
                <el-radio label="按面积算" value="1"></el-radio>
              </el-radio-group>
            </el-form-item>
            <div v-if="ruleForm.type=='按贷款额度计算'">
              <el-form-item label="贷款金额：" prop="ed">
                <el-input v-model.number="ruleForm.ed"></el-input>
                <span class="yuan">万元</span>
              </el-form-item>
              <el-form-item label="贷款期限：" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择贷款期限">
                  <el-option label="5年" value="5"></el-option>
                  <el-option label="10年" value="10"></el-option>
                  <el-option label="15年" value="15"></el-option>
                  <el-option label="20年" value="20"></el-option>
                  <el-option label="25年" value="25"></el-option>
                  <el-option label="30年" value="30"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="年利率：" prop="rate">
                <el-select v-model="ruleForm.rate" placeholder="请选择年利率">
                  <el-option label="最新基准利率(4.9%)" value="0.049"></el-option>
                  <el-option label="最新基准利率7折(3.34%)" value="0.0343"></el-option>
                  <el-option label="最新基准利率8折(3.92%)" value="0.0392"></el-option>
                  <el-option label="最新基准利率8.3折(4.08%)" value="0.04067"></el-option>
                  <el-option label="最新基准利率8.5折(4.17%)" value="0.04165"></el-option>
                  <el-option label="最新基准利率8.8折(4.31%)" value="0.04312"></el-option>
                  <el-option label="最新基准利率9折(4.41%)" value="0.0441"></el-option>
                  <el-option label="最新基准利率1.05倍(5.15%)" value="0.05145"></el-option>
                  <el-option label="最新基准利率1.1倍(5.39%)" value="0.0539"></el-option>
                  <el-option label="最新基准利率1.2倍(5.88%)" value="0.0588"></el-option>
                  <el-option label="最新基准利率1.3倍(6.37%)" value="0.0637"></el-option>
                </el-select>
              </el-form-item>
              <!-- <el-form-item rules="false" label="您也可以手动输入" prop="rate" >
                <el-input style="width:100px;" v-model.number="ruleForm.rate"></el-input>
              </el-form-item> -->
            </div>
            <div v-else>
              <el-form-item label="平米单价：" prop="price">
                <el-input v-model.number="ruleForm.price"></el-input>
                <span class="yuan">元/平米</span>
              </el-form-item>
              <el-form-item label="面积：" prop="area">
                <el-input v-model.number="ruleForm.area"></el-input>
                <span class="yuan">平米</span>
              </el-form-item>
              <el-form-item label="购房性质：" prop="property">
                <el-radio-group v-model="ruleForm.property">
                  <el-radio label="一套房" value="0"></el-radio>
                  <el-radio label="二套房" value="1"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="首付：" prop="payment">
                <el-select v-model="ruleForm.payment" placeholder="请选择首付">
                  <el-option label="2成" value="0.2"></el-option>
                  <el-option label="3成" value="0.3"></el-option>
                  <el-option label="4成" value="0.4"></el-option>
                  <el-option label="5成" value="0.5"></el-option>
                  <el-option label="6成" value="0.6"></el-option>
                  <el-option label="7成" value="0.7"></el-option>
                  <el-option label="8成" value="0.8"></el-option>
                  <el-option label="9成" value="0.9"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="贷款期限：" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择贷款期限">
                  <el-option label="5年" value="5"></el-option>
                  <el-option label="10年" value="10"></el-option>
                  <el-option label="15年" value="15"></el-option>
                  <el-option label="20年" value="20"></el-option>
                  <el-option label="25年" value="25"></el-option>
                  <el-option label="30年" value="30"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="年利率：" prop="rate">
                <el-select v-model="ruleForm.rate" placeholder="请选择年利率">
                  <el-option label="最新基准利率(4.9%)" value="0.049"></el-option>
                  <el-option label="最新基准利率7折(3.34%)" value="0.0343"></el-option>
                  <el-option label="最新基准利率8折(3.92%)" value="0.0392"></el-option>
                  <el-option label="最新基准利率8.3折(4.08%)" value="0.04067"></el-option>
                  <el-option label="最新基准利率8.5折(4.17%)" value="0.04165"></el-option>
                  <el-option label="最新基准利率8.8折(4.31%)" value="0.04312"></el-option>
                  <el-option label="最新基准利率9折(4.41%)" value="0.0441"></el-option>
                  <el-option label="最新基准利率1.05倍(5.15%)" value="0.05145"></el-option>
                  <el-option label="最新基准利率1.1倍(5.39%)" value="0.0539"></el-option>
                  <el-option label="最新基准利率1.2倍(5.88%)" value="0.0588"></el-option>
                  <el-option label="最新基准利率1.3倍(6.37%)" value="0.0637"></el-option>
                </el-select>
              </el-form-item>
            </div>
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
          <div class="result-left">
            <h1>每月等额还款(等额本息)</h1>
            <table border="1">
              <tr >
                <td width="114px" height="46px" bgcolor="#f8f8f8" style="text-align: center;">贷款总额：</td>
                <td width="205px" height="46px" style="padding-right:20px;text-align:right;">{{this.resultEd}}元</td>
              </tr>
                <tr>
                <td width="114px" height="46px" bgcolor="#f8f8f8" style="text-align: center;">还款月数：</td>
                <td width="205px" height="46px" style="padding-right:20px;text-align:right;">{{this.resultRegion}}月</td>
              </tr>
                <tr>
                <td width="114px" height="68px" bgcolor="#f8f8f8" style="text-align: center;">每月还款：</td>
                <td width="205px" height="46px" style="padding-right:20px;text-align:right;"><span style="color:#ff0000">{{this.resultRepayment}}</span>元</td>
              </tr>
                <tr>
                <td width="114px" height="46px" bgcolor="#f8f8f8" style="text-align: center;">总支付利息：</td>
                <td width="205px" height="46px" style="padding-right:20px;text-align:right;"><span style="color:#ff0000">{{this.Totalinterestpayments}}</span>元</td>
              </tr>
                <tr>
                <td width="114px" height="46px" bgcolor="#f8f8f8" style="text-align: center;">本息合计：</td>
                <td width="205px" height="46px" style="padding-right:20px;text-align:right;"><span style="color:#ff0000">{{this.total}}</span>元</td>
              </tr>
            </table>
          </div>
          <div class="result-right">
            <h1>逐月递减还款(等额本金)</h1>
            <table border="1">
              <tr >
                <td width="114px" height="46px" bgcolor="#f8f8f8" style="text-align: center;">贷款总额：</td>
                <td width="205px" height="46px" style="padding-right:20px;text-align:right;">{{this.resultEd}}元</td>
              </tr>
                <tr>
                <td width="114px" height="46px" bgcolor="#f8f8f8" style="text-align: center;">还款月数：</td>
                <td width="205px" height="46px" style="padding-right:20px;text-align:right;">{{this.resultRegion}}月</td>
              </tr>
                <tr>
                <td width="114px" height="68px" bgcolor="#f8f8f8" style="text-align: center;">首月还款：</td>
                <td width="205px" height="46px" style="padding-right:20px;text-align:right;"><span style="color:#ff0000">{{this.resultOneRepayment}}</span>元<br><span style="color:#cccccc;">每月递减：{{this.descending}}元</span></td>
              </tr>
                <tr>
                <td width="114px" height="46px" bgcolor="#f8f8f8" style="text-align: center;">总支付利息：</td>
                <td width="205px" height="46px" style="padding-right:20px;text-align:right;"><span style="color:#ff0000">{{this.Totalinterestpayments2}}</span>元</td>
              </tr>
                <tr>
                <td width="114px" height="46px" bgcolor="#f8f8f8" style="text-align: center;">本息合计：</td>
                <td width="205px" height="46px" style="padding-right:20px;text-align:right;"><span style="color:#ff0000">{{this.total2}}</span>元</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="form-bottom"><img src="../../../common/img/276473625106652431.png" alt=""><span>此结果仅供参考，实际应缴费以当地为准</span></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ruleForm: {
        type: '按贷款额度计算',
        ed: '',
        region: '',
        rate: '',
        price: '',
        area: '',
        property: '一套房',
        payment: ''
      },
      resultEd: 0,
      resultRegion: 0,
      resultRate: 0,
      resultRepayment: 0,
      Totalinterestpayments: 0,
      resultRate2: 0,
      resultOneRepayment: 0,
      descending: 0,
      Totalinterestpayments2: 0,
      total: 0,
      total2: 0,
      rules: {
        ed: [
          { required: true, message: '请输入贷款额度' },
          { type: 'number', message: '贷款额度必须为数值' }
        ],
        region: [
          { required: true, message: '请选择贷款期限', trigger: 'change' }
        ],
        rate: [
          { required: true, message: '请选择年利率', trigger: 'change' }
        ],
        payment: [
          { required: true, message: '请选择首付', trigger: 'change' }
        ],
        type: [
          { required: true, message: '请选择计算方式', trigger: 'change' }
        ],
        price: [
          { required: true, message: '请输入平米单价' },
          { type: 'number', message: '平米单价必须为数值' }
        ],
        area: [
          { required: true, message: '请输入面积' },
          { type: 'number', message: '面积必须为数值' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      if (this.ruleForm.type === '按贷款额度计算') {
        // 验证
        if (this.ruleForm.ed === '') {
          this.$message({
            showClose: true,
            message: '请输入贷款金额！',
            type: 'error'
          })
          return false
        }
        if (this.ruleForm.region === '') {
          this.$message({
            showClose: true,
            message: '请选择贷款期限！',
            type: 'error'
          })
          return false
        }
        if (this.ruleForm.rate === '') {
          this.$message({
            showClose: true,
            message: '请选择年利率！',
            type: 'error'
          })
          return false
        }
        // 贷款总额
        this.resultEd = this.ruleForm.ed * 10000
        // 贷款期限（月数）
        this.resultRegion = parseInt(this.ruleForm.region) * 12
        // 月利率
        this.resultRate = parseFloat(this.ruleForm.rate) / 12
        // 次方数
        var pow = Math.pow((1 + this.resultRate), this.resultRegion)
        // 除数
        var divisor = this.resultEd * this.resultRate * pow
        // 被除数
        var dividend = pow - 1
        // 每月还款
        this.resultRepayment = parseFloat(divisor / dividend).toFixed(2)
        var repayment = parseFloat(divisor / dividend)
        // 总支付利息
        this.Totalinterestpayments = parseFloat(repayment * this.resultRegion - this.resultEd).toFixed(2)
        // 总计
        this.total = parseFloat(repayment * this.resultRegion).toFixed(2)
        // 首月还款
        this.resultOneRepayment = parseFloat((this.resultEd / this.resultRegion) + (this.resultEd * this.resultRate)).toFixed(2)
        // 每月月供递减额
        this.descending = parseFloat(this.resultEd / this.resultRegion * this.resultRate).toFixed(2)
        // 等额本金总利息
        this.Totalinterestpayments2 = parseFloat(((this.resultEd / this.resultRegion + this.resultEd * this.resultRate) + this.resultEd / this.resultRegion * (1 + this.resultRate)) / 2 * this.resultRegion - this.resultEd).toFixed(2)
        // 等额本金总计
        this.total2 = parseFloat(((this.resultEd / this.resultRegion + this.resultEd * this.resultRate) + this.resultEd / this.resultRegion * (1 + this.resultRate)) / 2 * this.resultRegion).toFixed(2)
      } else {
        // 验证
        if (this.ruleForm.price === '') {
          this.$message({
            showClose: true,
            message: '请输入平米单价！',
            type: 'error'
          })
          return false
        }
        if (this.ruleForm.area === '') {
          this.$message({
            showClose: true,
            message: '请选择面积！',
            type: 'error'
          })
          return false
        }
        if (this.ruleForm.payment === '') {
          this.$message({
            showClose: true,
            message: '请选择首付！',
            type: 'error'
          })
          return false
        }
        if (this.ruleForm.region === '') {
          this.$message({
            showClose: true,
            message: '请选择贷款期限！',
            type: 'error'
          })
          return false
        }
        if (this.ruleForm.rate === '') {
          this.$message({
            showClose: true,
            message: '请选择年利率！',
            type: 'error'
          })
          return false
        }
        // 贷款总额
        this.resultEd = (this.ruleForm.price * this.ruleForm.area) - (this.ruleForm.price * this.ruleForm.area * this.ruleForm.payment)
        // 还款月数
        this.resultRegion = parseInt(this.ruleForm.region) * 12
        // 月利率
        this.resultRate = parseFloat(this.ruleForm.rate) / 12
        // 次方数
        var pow2 = Math.pow((1 + this.resultRate), this.resultRegion)
        // 除数
        var divisor2 = this.resultEd * this.resultRate * pow2
        // 被除数
        var dividend2 = pow2 - 1
        // 每月还款
        this.resultRepayment = parseFloat(divisor2 / dividend2).toFixed(2)
        var repayment2 = parseFloat(divisor2 / dividend2)
        // 总支付利息
        this.Totalinterestpayments = parseFloat(repayment2 * this.resultRegion - this.resultEd).toFixed(2)
        // 总计
        this.total = parseFloat(repayment2 * this.resultRegion).toFixed(2)
        // 首月还款
        this.resultOneRepayment = parseFloat((this.resultEd / this.resultRegion) + (this.resultEd * this.resultRate)).toFixed(2)
        // 每月月供递减额
        this.descending = parseFloat(this.resultEd / this.resultRegion * this.resultRate).toFixed(2)
        // 等额本金总利息
        this.Totalinterestpayments2 = parseFloat(((this.resultEd / this.resultRegion + this.resultEd * this.resultRate) + this.resultEd / this.resultRegion * (1 + this.resultRate)) / 2 * this.resultRegion - this.resultEd).toFixed(2)
        // 等额本金总计
        this.total2 = parseFloat(((this.resultEd / this.resultRegion + this.resultEd * this.resultRate) + this.resultEd / this.resultRegion * (1 + this.resultRate)) / 2 * this.resultRegion).toFixed(2)
      }
      // console.log(this.resultRepayment)
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
    }
  }
}
</script>
<style lang="less" scoped>
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
      .yuan {
        position: absolute;
        top: 0;
        right: 5%;
        color: #4d4d4d;
      }
    }
  }
  .form-output {
    height: 414px;
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
      display: flex;
      justify-content: space-around;
      .result-left {
        width: 340px;
        // background-color: red;
        h1 {
          margin-bottom: 22px;
        }
        table {
          border: solid 1px #cccccc;
          color: #4d4d4d;
          font-size: 16px;
        }
      }
      .result-right {
        width: 340px;
        // background-color: red;
        h1 {
          margin-bottom: 22px;
        }
        table {
          border: solid 1px #cccccc;
          color: #4d4d4d;
        }
      }
    }
    .form-bottom {
      margin-left: 67px;
      margin-top: 27px;
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
</style>
