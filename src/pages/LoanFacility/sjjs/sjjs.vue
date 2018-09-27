<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/loanfacility/dkgg' }">贷款工具</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/loanfacility/sjjs' }">身价计算器</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content-banner">
      <img src="../../../common/img/hhjr.png" alt="hhjr" width="100%">
    </div>
    <span class="content-title">身价计算器</span>
    <div class="content-paper">
      <p style="font-size:22px;color:#666666;margin-bottom:15px;">工具简介：</p>
      <p style="width:796px;height:40px;font-size:14px;line-height:22px;color:#666666;">身价计算器通过几道测试题，1分钟计算身价，轻松搞定贷款身价估算问题，并为您推荐更加精准的贷款产品，让您更加轻松借贷。</p>
    </div>
    <div class="content-form">
      <div class="form-input">
        <h1><img src="../../../common/img/input.png" alt=""><span>输入数据</span></h1>
        <div class="shuju">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm">
            <el-form-item label="当前的存款数额：" prop="ckse">
              <el-input v-model.number="ruleForm.ckse"></el-input>
              <span class="yuan">元</span>
            </el-form-item>
            <el-form-item label="当前月工资：" prop="gz">
              <el-input v-model.number="ruleForm.gz"></el-input>
              <span class="yuan">元</span>
            </el-form-item>
            <el-form-item label="每月工资的存款比例：" prop="payment">
              <el-select v-model="ruleForm.payment" placeholder="请选择比例">
                <el-option label="0%" value="0"></el-option>
                <el-option label="5%" value="5"></el-option>
                <el-option label="10%" value="10"></el-option>
                <el-option label="15%" value="15"></el-option>
                <el-option label="20%" value="20"></el-option>
                <el-option label="25%" value="25"></el-option>
                <el-option label="30%" value="30"></el-option>
                <el-option label="35%" value="35"></el-option>
                <el-option label="40%" value="40"></el-option>
                <el-option label="45%" value="45"></el-option>
                <el-option label="50%" value="50"></el-option>
                <el-option label="55%" value="55"></el-option>
                <el-option label="60%" value="60"></el-option>
                <el-option label="65%" value="65"></el-option>
                <el-option label="70%" value="70"></el-option>
                <el-option label="75%" value="75"></el-option>
                <el-option label="80%" value="80"></el-option>
                <el-option label="85%" value="85"></el-option>
                <el-option label="90%" value="90"></el-option>
                <el-option label="95%" value="95"></el-option>
                <el-option label="100%" value="100"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="希望进行身价预估的时间：" prop="ygsj">
              <el-input v-model.number="ruleForm.ygsj"></el-input>
              <span class="yuan">年后</span>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即计算</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="form-output" id="form-output">
        <h1><img src="../../../common/img/output.png" alt=""><span>计算结果</span></h1>
        <div class="result">
          <div class="con">
            <div class="con-top">
              <p>综合身价为：<span style="font-size: 24px;color: #f23835;font-weight: normal;">{{zhsj}}</span><span style="font-size: 12px;color: #888;">元</span></p>
            </div>
            <div class="con-bottom">
              <p style="color: #666;font-size: 14px;"><span>{{nh}}</span>年后您的身价为<span style="color: #ff7800;font-size: 24px;font-weight: normal;">{{sjw}}</span>元</p>
              <p v-if="zz !== 0" style="color: #666;font-size: 14px;">增长<span style="color: #f23835;">{{zz + '%'}}</span>，财富排名超过<span style="color: #f23835;">{{cg + '%'}}</span>中国人</p>
            </div>
          </div>
        </div>
        <div class="form-bottom"><img src="../../../common/img/276473625106652431.png" alt=""><span>此计算结果仅供参考</span></div>
      </div>
    </div>
  </div>
</template>
<script>
import numFormat from '../../../common/js/numFormat'
export default {
  data () {
    return {
      ruleForm: {
        ckse: '',
        gz: '',
        payment: '0%',
        ygsj: ''
      },
      zhsj: 0,
      nh: 0,
      sjw: 0,
      zz: 0,
      cg: 0,
      rules: {
        ckse: [
          { required: true, message: '请输入存款数额' },
          { type: 'number', message: '存款数额必须为数值' }
        ],
        gz: [
          { required: true, message: '请输入工资' },
          { type: 'number', message: '工资必须为数值' }
        ],
        payment: [
          { required: true, message: '请选择存款比例', trigger: 'change' }
        ],
        ygsj: [
          { required: true, message: '请输入预估时间' },
          { type: 'number', message: '预估时间必须为数值(年)' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      // 验证
      if (this.ruleForm.ckse === '') {
        this.$message({
          showClose: true,
          message: '请输入当前的存款数额！',
          type: 'error'
        })
        return false
      }
      if (this.ruleForm.gz === '') {
        this.$message({
          showClose: true,
          message: '请输入当前月工资！',
          type: 'error'
        })
        return false
      }
      if (this.ruleForm.payment === '') {
        this.$message({
          showClose: true,
          message: '请选择比例！',
          type: 'error'
        })
        return false
      }
      if (this.ruleForm.ygsj === '') {
        this.$message({
          showClose: true,
          message: '请输入预估时间！',
          type: 'error'
        })
        return false
      }
      // 您当前的存款数额
      var curStore = parseInt(this.ruleForm.ckse)
      // 您当前的月工资
      var curWage = parseInt(this.ruleForm.gz)
      // 您每月工资的存款比例
      var storePer = parseFloat(this.ruleForm.payment)
      // 您希望进行身价预估的时间
      var estTime = parseInt(this.ruleForm.ygsj)
      var r = 1 / 100
      var d = Math.pow(1 + r, estTime * 12)
      var P = curStore * d // 当前身价到期后的价值
      var P2 = (curWage * (storePer / 100)) * ((d - 1) / r) // 计算每个月的存款及到期后的价值
      var pSum = P + P2
      var sum = numFormat(pSum, -1) // 价值
      var grow = numFormat(((pSum - curStore) / curStore) * 100, -1) // 增长
      var rank
      if (pSum < 28000) {
        rank = numFormat((pSum / 560) + 1, -1)
      } else if (pSum > 28000 && pSum < 200000) {
        rank = numFormat((pSum - 28000) / 3822 + 50, -1)
      } else if (pSum > 200000 && pSum < 1000000) {
        rank = numFormat((pSum - 200000) / 200000 + 95, -1)
      } else if (pSum > 1000000) {
        rank = 99
      }
      this.zhsj = sum
      this.nh = estTime
      this.sjw = sum
      this.zz = grow
      this.cg = rank
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
      // console.log(this.ruleForm.type)
      this.zhsj = 0
      this.nh = 0
      this.sjw = 0
      this.zz = 0
      this.cg = 0
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
      width: 500px;
      margin-left: 160px;
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
      .con{
        width: 100%;
        height: 190px;
        background-color: #f6f6f6;
        border-bottom: 1px solid #e6e6e6;
        border-right: 1px solid #e6e6e6;
        text-align: center;
        .con-top{
          height: 84px;
          line-height: 84px;
          border-bottom: 1px solid #e6e6e6;
        }
        .con-bottom{
          height: 105px;
          display: flex;
          justify-content:space-around;
          // align-items:center;
          flex-direction:column;
        }
      }
    }
    .form-bottom {
      margin-left: 41px;
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
