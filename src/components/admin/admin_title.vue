<template>
  <div id="title">
    <div class="block" v-for="item,index in seeinfo" :key="item" @click="view(item.en,index)">
      <div :class="selectedId==index?'active':''" >
        <img :src="item.img" alt="" />
        <span>{{ item.name }}</span>
      </div>
      <!-- <img class="trgin" :src="item.trgin" alt="" /> -->
    </div>
    <div class="trgin"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
//系统图片
import organization from "@/assets/admin/组织机构.png";
import user from "@/assets/admin/用户.png";
import dictionary from "@/assets/admin/数字字典管理.png";
import Posts from "@/assets/admin/岗位图标.png";
import announcement from "@/assets/admin/公告-通知.png";
import parameter from "@/assets/admin/参数管理.png";
import resource from "@/assets/admin/33资源-线性.png";
import Permissions from "@/assets/admin/权限管理.png";
import serve from "@/assets/admin/服务监控.png";
//运行监控
import stations from "@/assets/admin/来源概览@2x.png";
import transformer from "@/assets/admin/变压器@2x.png";
import Feeder from "@/assets/admin/输电线路@2x.png";
import closing from "@/assets/admin/开闸@2x.png";
import new_data from "@/assets/admin/数据挖掘@2x.png";
import diagram from "@/assets/admin/gis-js-主线井@2x.png";
import gateway from "@/assets/admin/NAT网关@2x.png";
import Terminal from "@/assets/admin/终端监控@2x.png";
import Environmental from "@/assets/admin/环境监测@2x.png";
import alter1 from "@/assets/admin/清单@2x.png";
import alter2 from "@/assets/admin/统计 (2)@2x.png";
//电务管理
import Ledger from "@/assets/admin/账号管理 (1)@2x.png";
import Alarm from "@/assets/admin/警报.png";
import Device from "@/assets/admin/设备@2x.png";
import Graphics from "@/assets/admin/图片 (1)@2x.png";
import Debugging from "@/assets/admin/调试@2x.png";
//三角
import bottom from "@/assets/admin/x_下拉 拷贝 5@2x.png";
//父组件穿的值
import { toRefs, defineProps, watch } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({
  //子组件接收父组件传递过来的值
  info: String,
});
const { info } = toRefs(props);
//事件
let head = ref("");
const router = useRouter();
const allinfo = ref({
  panorama: [],
  hall: [],
  alert: [
    {
      name: "告警统计",
      img: alter2,
    },
    {
      name: "告警清单",
      img: alter1,
    },
  ],
  statistics: [],
  panoramaclicked: [],
  monitor: [
    {
      name: "站点概览",
      img: stations,
      en:"stations"
    },
    {
      name: "变压器检测",
      img: transformer,
      en:"transformer"
    },
    {
      name: "馈线监测",
      img: Feeder,
      en:"Feeder"
    },
    {
      name: "分合闸统计",
      img: closing,
      en:"closing"
    },
    {
      name: "实时数据",
      img: new_data,
      en:"new_data"
    },
    {
      name: "主接线图",
      img: diagram,
      en:'maindiagram',
    },
    {
      name: "网关监测",
      img: gateway,
       en:'gateway'
    },
    {
      name: "终端监测",
      img: Terminal,
       en:'Terminal'
    },
    {
      name: "环境量监测",
      img: Environmental,
      en:'Environmental'
    },
  ],
  system: [
    {
      name: "部门管理",
      img: organization,
      en:"organization"
    },
    {
      name: "用户管理",
      img: user,
      en:"user"
    },
    {
      name: "字典管理",
      img: dictionary,
      en:"dictionary"
    },
    {
      name: "岗位管理",
      img: Posts,
      en:"Posts"
    },
    {
      name: "公告通知",
      img: announcement,
      en:"announcement"
    },
    {
      name: "参数管理",
      img: parameter,
      en:"parameter"
    },
    {
      name: "资源管理",
      img: resource,
      en:"resource"
    },
    {
      name: "权限管理",
      img: Permissions,
      en:"Permissions"
    },
    {
      name: "服务监控",
      img: serve,
      en:"serve"
    },
  ],
  electricity: [
    {
      name: "台账管理",
      img: Ledger,
      trgin: bottom,
    },
    {
      name: "告警引擎",
      img: Alarm,
    },
    {
      name: "设备管理",
      img: Device,
    },
    {
      name: "图模管理",
      img: Graphics,
    },
    {
      name: "调试工具",
      img: Debugging,
    },
  ],
});
const selectedId=ref(0)
const seeinfo = ref([]);
const view=(en,index)=>{
  selectedId.value=index
  en!=undefined&&
   router.push({ path: `/admin/${en}` });
   en==undefined&& router.push({ path: `/admin` });
}

watch(info, (curr) => {
  let xianshi = [];
  head.value = curr;
  allinfo.value[curr].map((ele) => {

      xianshi.push(ele);

  });
  seeinfo.value = xianshi
});
</script>

<style lang="scss" scoped>
.active{
  color:#00baea
}
#title {
  width: 95%;
  height: 50px;
  align-items: center;
  background: #5f70a5;
  display: flex;
  padding-left: 5%;
  .block {
    cursor: pointer;
    height: 30px;
    width: 9em;
    font-size: 16px;
    color: #ffffff;
    display: flex;
    align-items: center;
    margin-left: 1em;
    >div{
      display: flex;
      align-items: center;
    }
    img {
      height: 22px;
      margin-right: 0.5em;
    }
    .trgin {
      margin-top: 0.2em;
      height: 11px;
      margin-left: 0.5em;
    }
  }
}
/*滚动条样式*/
#title::-webkit-scrollbar {
  width: 0px;
}
</style>