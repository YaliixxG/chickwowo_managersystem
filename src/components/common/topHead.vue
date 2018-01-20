<template>
  <div class="header">
  <div class="logo">鸡窝窝后台管理系统</div>
  <div class="user-info">
    <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    退出登录<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item><span @click="offline">确认退出</span></el-dropdown-item>
    </el-dropdown-menu>
    </el-dropdown>
  </div>

  </div>
</template>

<script>
export default {
  name: 'topHead',
  data () {
    return {
      
    }
  },
  methods: {
    offline(){
      this.$router.push('/Login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  position: relative;
  height: 100px;
}
.header .logo{
   height: 100px;
   line-height: 100px;
   font-size: 25px;
   font-weight: 600;
   color: #fff;
   text-indent: 1em;
}
.header .user-info{
  position: absolute;
  bottom: 0px;
  right:20px;
}
.header .el-dropdown-link{
  color: #fff;
  font-size: 16px;
}

</style>