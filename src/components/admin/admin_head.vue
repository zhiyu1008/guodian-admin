<template>
  <div id="head">
    <div class="meun">
      智慧电务
      <div
        :class="data.clicked == 'panorama' ? 'clicked' : 'noclicked'"
        @click="clicked('panorama')"
      >
        <img
          :class="data.clicked == 'panorama' && 'imgclicked'"
          :src="data.clicked == 'panorama' ? panoramaclicked : panorama"
          alt=""
        />
        全景视图
      </div>
      <div
        :class="data.clicked == 'hall' ? 'clicked' : 'noclicked'"
        @click="clicked('hall')"
      >
        <img
          :class="data.clicked == 'hall' && 'imgclicked'"
          :src="data.clicked == 'hall' ? hallclicked : hall"
          alt=""
        />
        工作大厅
      </div>
      <div
        :class="data.clicked == 'monitor' ? 'clicked' : 'noclicked'"
        @click="clicked('monitor')"
      >
        <img
          :class="data.clicked == 'monitor' && 'imgclicked'"
          :src="data.clicked == 'monitor' ? monitorclicked : monitor"
          alt=""
        />
        运行监控
      </div>
      <div
        :class="data.clicked == 'alert' ? 'clicked' : 'noclicked'"
        @click="clicked('alert')"
      >
        <img
          :class="data.clicked == 'alert' && 'imgclicked'"
          :src="data.clicked == 'alert' ? alertclicked : alert"
          alt=""
        />
        告警中心
      </div>
      <div
        :class="data.clicked == 'statistics' ? 'clicked' : 'noclicked'"
        @click="clicked('statistics')"
      >
        <img
          :class="data.clicked == 'statistics' && 'imgclicked'"
          :src="data.clicked == 'statistics' ? statisticsclicked : statistics"
          alt=""
        />
        统计分析
      </div>
      <div
        :class="data.clicked == 'electricity' ? 'clicked' : 'noclicked'"
        @click="clicked('electricity')"
      >
        <img
          :class="data.clicked == 'electricity' && 'imgclicked'"
          :src="
            data.clicked == 'electricity' ? electricityclicked : electricity
          "
          alt=""
        />
        电务管理
      </div>
      <div
        :class="data.clicked == 'system' ? 'clicked' : 'noclicked'"
        @click="clicked('system')"
      >
        <img
          :class="data.clicked == 'system' && 'imgclicked'"
          :src="data.clicked == 'system' ? systemclicked : system"
          alt=""
        />
        系统管理
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router"
import panorama from "@/assets/admin/全景监控.png";
import hall from "@/assets/admin/办事大厅.png";
import monitor from "@/assets/admin/监控.png";
import alert from "@/assets/admin/警报.png";
import statistics from "@/assets/admin/统计 .png";
import electricity from "@/assets/admin/电网.png";
import system from "@/assets/admin/系统管理.png";
import panoramaclicked from "@/assets/admin/clicked/全景监控.png";
import hallclicked from "@/assets/admin/clicked/办事大厅.png";
import monitorclicked from "@/assets/admin/clicked/监控.png";
import alertclicked from "@/assets/admin/clicked/警报.png";
import statisticsclicked from "@/assets/admin/clicked/统计.png";
import electricityclicked from "@/assets/admin/clicked/电网.png";
import systemclicked from "@/assets/admin/clicked/系统管理.png";
import { ref, defineEmits } from "vue";
const data = ref({
  clicked: "panorama",
});
// let xianshidata= JSON.parse(localStorage.getItem('all')); //

const emit = defineEmits(["clicked"]);

const router= useRouter();

const clicked = (info) => {
  switch(info){
    case 'panorama':
    router.push('/admin')
    break;
    case 'hall':

    break;
    case 'monitor':
    router.push('/admin/stations')
    break;
    case 'alert':
    router.push('/admin')
    break;
    case 'statistics':

    break;
    case 'electricity':
    router.push('/admin')
    break;
    case 'system':
    router.push('/admin/organization')
    break;
  }
  let param = {
    content: info,
  };
  //传递给父组件
  emit("clicked", param);
  data.value.clicked = info;
};
</script>

<style lang="scss" scoped>
#head {
  width: 100%;
  .meun {
    width: calc(100% - 0.5em);
    height: 66px;
    background: #031859;
    font-size: 38px;
    display: flex;
    color: #ffffff;
    padding-left: 0.5em;
    align-items: center;
    font-family: "微软雅黑";
    font-weight: 600;
  }

}
.meun {
  div {
    cursor: pointer;
    min-width: 4.16vw;
    display: flex;
    align-items: center;
    font-size: 1vw;
    font-weight: 400;
    margin-left: 1em;
    img {
      height: 24px;
      margin-right: 10px;
    }
  }
  .clicked {
    color: #00baea;
  }
}
</style>