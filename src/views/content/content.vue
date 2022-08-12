<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
<!--            Module not found: Error: Can't resolve 'assets/img/logo.png' in '/Users/rublev/dev/company/support/app/components/Img'-->
<!--            https://cloud.tencent.com/developer/ask/sof/707208-->
<!--            <img src="require(~@/assets/logo.png)" alt="无法显示图片">-->
            <img src="../../assets/logo.png" width="180px" height="60px" alt="无法显示图片">
          </div>
        </el-col>
        <el-col :span="18" class="middle">
            <h3>世界</h3>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <a class="loginout" href="#">退出</a>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="aside" width="200px">
<!--        如何查看element UI组件的所有class-->
        <el-menu
          :unique-opened = "true"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-coordinate"></i>
              <span>权限</span>
            </template>

            <el-menu-item index="1-1">
              <i class="el-icon-location"></i>
              <span>选项1</span>
            </el-menu-item>
            <el-menu-item index="1-2">
              <i class="el-icon-location"></i>
              <span>选项2</span>
            </el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-scissors"></i>
              <span>角色</span>
            </template>

            <el-menu-item index="1-1">
              <i class="el-icon-location"></i>
              <span>选项1</span>
            </el-menu-item>

            <el-submenu index="1-2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>选项4</span>
              </template>
              <el-menu-item index="1-4-1">
                <i class="el-icon-location"></i>
                <span>选项2</span>
              </el-menu-item>
            </el-submenu>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-magic-stick"></i>
              <span>商品</span>
            </template>

            <el-menu-item index="1-1">
              <i class="el-icon-location"></i>
              <span>选项1</span>
            </el-menu-item>

            <el-submenu index="1-2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>选项2</span>
              </template>
              <el-menu-item index="1-4-1">
                <i class="el-icon-location"></i>
                <span>选项2</span>
              </el-menu-item>
            </el-submenu>
          </el-submenu>

          <el-submenu unique-opened="true" index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单</span>
            </template>

            <el-menu-item-group title="分组">
              <el-menu-item index="1-1">
                <i class="el-icon-mouse"></i>
                <span>选项1</span>
              </el-menu-item>
            </el-menu-item-group>

            <el-submenu index="1-2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>选项4</span>
              </template>
              <el-menu-item index="1-4-1">
                <i class="el-icon-location"></i>
                <span>选项2</span>
              </el-menu-item>
            </el-submenu>

            <el-submenu index="1-3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>选项4</span>
              </template>
              <el-menu-item index="1-4-1">
                <i class="el-icon-location"></i>
                <span>选项2</span>
              </el-menu-item>
            </el-submenu>
          </el-submenu>

        </el-menu>
      </el-aside>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {
  // 钩子函数
  beforeCreate() {
    // token出来
    const token = localStorage.getItem("token")

    if(!token){
      //无token
      this.$router.push({name:'LOGIN'})
    }
  }
}
</script>

<style scoped>
.container{
  height: 100%;
}
.header{
  background-color: beige;
}
.aside{
  background-color: darkgray;
}
.main{
  background-color: antiquewhite;
}
.middle{
  text-align: center;
}
.loginout{
  line-height: 60px;

  text-decoration: none;
}
</style>
