<template>
  <div id="maindiagram" :style="{ backgroundImage: `url(${maindiagram})` }">  
  </div>
</template>

<script setup>
import maindiagram  from "@/assets/admin/body/大屏.png";
</script>

<style lang="scss" scoped>
#maindiagram{
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
}
</style>