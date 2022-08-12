<template>
  <div class="login-wrap">
    <el-form
      class="login-form"
      label-position="top"
      label-width="80px"
      :model="formdata">
<!--      <h2>用户登录</h2>-->
      <el-form-item label="用户名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formdata.password"></el-input>
      </el-form-item>
      <el-button
        @click.prevent="login()"
        class="login-btn" type="primary">login</el-button>
    </el-form>

<!--    <el-form-->
<!--      :model="formdata"-->
<!--      status-icon-->
<!--      :rules="rules"-->
<!--      ref="ruleForm"-->
<!--      label-width="100px"-->
<!--      class="demo-ruleForm">-->
<!--      <el-form-item label="用户名" prop="username">-->
<!--        <el-input type="password" v-model="formdata.username" autocomplete="off"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="密码" prop="password">-->
<!--        <el-input v-model.number="formdata.password"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item>-->
<!--        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>-->
<!--        <el-button @click="resetForm('ruleForm')">重置</el-button>-->
<!--      </el-form-item>-->
<!--    </el-form>-->

  </div>
</template>

<script>

import router from "../../router";

export default {
  data(){
    //es6箭头函数
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };

    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };

    return{
      // 定义变量
      formdata:{
        username:'',
        password:''
      },
      // 定义限制
      rules: {
        username: [
          { validator: validatePass, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass2, trigger: 'blur' }
        ],
      }
    };

  },
  methods:{
    // 登录
    //es7 async + await:异步类同步
    async login(){
      // this.$http.post('/apis/user/userlogin',this.formdata)
      //   .then((res)=>{
      //     // const {
      //     //   data,
      //     //   meta:{msg,data}
      //     // }=res.data
      //     if (res.data.msg === "登录成功"){
      //       this.$message.success(res.data.msg);
      //       this.$router.push({name:"Content"});
      //     }else {
      //       this.$message.warning(res.data.msg);
      //     }
      //   })
      const res = await this.$http.post('/apis/login/userlogin',this.formdata);
      console.log(res);
      if (res.data.code === 200){
          this.$message.success(res.data.msg);
          this.$router.push({name:"Content"});
          // 保存token，在做页面跳转时，判断token
         // res.data.data();
        sessionStorage.setItem('token',res.data.data().token);

        }else {
          this.$message.warning(res.data.msg);
        }
    },


    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }

  }
}
</script>
<!--<img alt="Vue logo" src="../assets/logo.png">-->
<style scoped>
.login-wrap{
  height: 100%;
  background-color: beige;
  /*弹性盒布局*/
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url("../../assets/image/login1.png");
  background-position: center;
  /* 背景图不平铺 */
  /*background-repeat: no-repeat;*/
  /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
  background-attachment: fixed;
  /* 让背景图基于容器大小伸缩 */
  /*background-size: cover;*/
  /* 设置背景颜色，背景图加载过程中会显示背景色 */
  /*background-color: #464646;*/

}
.login-wrap .login-form{
  width: 400px;
  /*background-color: antiquewhite;*/
  border-radius: 5px;
  padding: 30px;

}
.login-wrap .login-btn{
  width: 100%;
}
</style>
