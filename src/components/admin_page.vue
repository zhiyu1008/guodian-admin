<template>
  <div id="admin">
    <div class="unupload" @click="tologin()">
      注销
    </div>
    <Head @clicked="clickEven" />
    <Title :info="fathermsg" />
    <div class="body">
      <div class="page">
        <div class="block" >
          <img :src="Home" alt=""  @click="toshouye()"/>
          首页
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import Head from "./admin/admin_head.vue";
import Title from "./admin/admin_title.vue";
import { useRouter } from "vue-router";
import Home from "@/assets/admin/首页.png";
import { ref } from "vue";
// import request from "@/api/request.js";
const router = useRouter();
//前往登录页

//
const tologin = () => {
  router.push("/login");
};
const toshouye=()=>{
  router.push({ path: "/admin/user" });
}
const fathermsg = ref("");
//获取权限
// let quanxian1 = await request({
//   url: "/system/menu/roleMenuTreeData",
//   method: "get",
// });
// console.log(quanxian1)
// let quanxian2 = await request({
//   url: "/system/menu/list",
//   method: "get",
// });
// console.log(quanxian2)
const clickEven = (val) => {
  fathermsg.value = val.content;
};
</script>

<style lang="scss" scoped>
#admin {
  width: 100%;
  display: block;
  background: #f2f3f5;
  height: 100%;
  .body {
    width: 100%;
    height: calc(100% - 116px);
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: #f2f3f5;
    .title {
      margin-top: 0.3em;
      width: 95.86%;
      margin-top: 2px;
      height: 35px;
      font-size: 18px;
      display: flex;
      padding-left: 2em;
      position: relative;

      overflow-y: hidden;
    }
    .page {
      width: 95.86%;
      height: 79.41vh;
      background-color: #fff;
      margin-top: 2em;
      position: relative;
      z-index: 2;
      .block {
        cursor: pointer;
        display: flex;
        cursor: pointer;
        background: #ffffff;
        border-radius: 10px;
        height: 2em;
        display: flex;
        align-items: center;
        padding: 0 1em 0 1em;
        position: absolute;
        top: -1.9em;
        z-index: -1;
        img {
          width: 18px;
          height: 18px;
          margin-right: 0.5em;
        }
      }
    }
  }
}
.unupload{
  position: absolute;
  right: 1em;
  top: 20px;
  color: #FFFFFF;
  cursor: pointer;
}
</style>>

