<template>
  <router-view></router-view>
</template>

<script setup>
//  项目适配
const bodyScale=()=>{
  var devicewidth = document.documentElement.clientWidth; //获取当前分辨率下的可视区域宽度
  var scaleX = devicewidth / 1980; // 除以设计稿的尺寸
  document.body.style.zoom = scaleX; // 放大缩小相应倍数
  var deviceheight = document.documentElement.clientHeight; //获取当前分辨率下的可视区域宽度
  var scaleY = deviceheight / 848; // 除以设计稿的尺寸
  document.body.style.zoom = scaleY; // 放大缩小相应倍数
}
// bodyScale()
</script>

<style lang="scss">

* {
  margin: 0;
  font-family:"Microsoft YaHei";
}
body {

  width: 100%;
  height: 100vh;
}
#app {

  width: 100%;
  height: 100%;
}
</style>

