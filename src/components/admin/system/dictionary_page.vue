<template>
  <div id="maindiagram">
    <div class="title">
      <div>隆生玩具店用电数据分析</div>
    </div>
    <div class="info">
      <div class="block" :style="{ backgroundImage: `url(${background})` }">
        <img :src="year" alt="" srcset="" />
        <div class="use">
          <div class="num">45,889</div>
          <div class="name">年度用电(万kw)</div>
        </div>
        <div class="line"></div>
        <div class="left">
          <div class="bo">
            <div class="title">较去年</div>
            <div class="icon">
              <img :src="up" alt="" />
              <div class="num">548</div>
              <div class="init">(万kw)</div>
            </div>
          </div>
          <div class="bo">
            <div class="title">较去年同期</div>
            <div class="icon">
              <img :src="down" alt="" />
              <div class="num">238</div>
              <div class="init">(万kw)</div>
            </div>
          </div>
        </div>
      </div>
      <div class="block" :style="{ backgroundImage: `url(${background})` }">
        <img :src="mounth" alt="" srcset="" />
        <div class="use">
          <div class="num">45,889</div>
          <div class="name">月度用电(万kw)</div>
        </div>
        <div class="line"></div>
        <div class="left">
          <div class="bo">
            <div class="title">较上月</div>
            <div class="icon">
              <img :src="up" alt="" />
              <div class="num">548</div>
              <div class="init">(万kw)</div>
            </div>
          </div>
          <div class="bo">
            <div class="title">较上月同期</div>
            <div class="icon">
              <img :src="down" alt="" />
              <div class="num">238</div>
              <div class="init">(万kw)</div>
            </div>
          </div>
        </div>
      </div>
      <div class="block" :style="{ backgroundImage: `url(${background})` }">
        <img :src="day" alt="" srcset="" />
        <div class="use">
          <div class="num">45,889</div>
          <div class="name">日用电(万kw)</div>
        </div>
        <div class="line"></div>
        <div class="left">
          <div class="bo">
            <div class="title">较上日</div>
            <div class="icon">
              <img :src="up" alt="" />
              <div class="num">548</div>
              <div class="init">(万kw)</div>
            </div>
          </div>
          <div class="bo">
            <div class="title">较上日同期</div>
            <div class="icon">
              <img :src="down" alt="" />
              <div class="num">238</div>
              <div class="init">(万kw)</div>
            </div>
          </div>
        </div>
      </div>
      <div class="block" :style="{ backgroundImage: `url(${background})` }">
        <img :src="quarter" alt="" srcset="" />
        <div class="use">
          <div class="num">45,889</div>
          <div class="name">季度用电(万kw)</div>
        </div>
        <div class="line"></div>
        <div class="left">
          <div class="bo">
            <div class="title">较上一季度</div>
            <div class="icon">
              <img :src="up" alt="" />
              <div class="num">548</div>
              <div class="init">(万kw)</div>
            </div>
          </div>
          <div class="bo">
            <div class="title">较上一季同期</div>
            <div class="icon">
              <img :src="down" alt="" />
              <div class="num">238</div>
              <div class="init">(万kw)</div>
            </div>
          </div>
        </div>
      </div>
      <div class="block" :style="{ backgroundImage: `url(${background})` }">
        <img :src="week" alt="" srcset="" />
        <div class="use">
          <div class="num">45,889</div>
          <div class="name">周用电(万kw)</div>
        </div>
        <div class="line"></div>
        <div class="left">
          <div class="bo">
            <div class="title">较上周</div>
            <div class="icon">
              <img :src="up" alt="" />
              <div class="num">548</div>
              <div class="init">(万kw)</div>
            </div>
          </div>
          <div class="bo">
            <div class="title">较上一周同期</div>
            <div class="icon">
              <img :src="down" alt="" />
              <div class="num">238</div>
              <div class="init">(万kw)</div>
            </div>
          </div>
        </div>
      </div>
      <div class="block" :style="{ backgroundImage: `url(${background})` }">
        <img :src="hour" alt="" srcset="" />
        <div class="use">
          <div class="num">45,889</div>
          <div class="name">时用电(万kw)</div>
        </div>
        <div class="line"></div>
        <div class="left">
          <div class="bo">
            <div class="title">较上一小时</div>
            <div class="icon">
              <img :src="up" alt="" />
              <div class="num">548</div>
              <div class="init">(万kw)</div>
            </div>
          </div>
          <div class="bo">
            <div class="title">较上一小时同期</div>
            <div class="icon">
              <img :src="down" alt="" />
              <div class="num">238</div>
              <div class="init">(万kw)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref="chart" id="chart"></div>
  </div>
</template>

<script setup>
import background from "@/assets/admin/info/矩形12.png";
import year from "@/assets/admin/info/年.png";
import up from "@/assets/admin/info/上升.png";
import down from "@/assets/admin/info/下降.png";
import mounth from "@/assets/admin/info/月.png";
import day from "@/assets/admin/info/日.png";
import quarter from "@/assets/admin/info/季.png";
import week from "@/assets/admin/info/周.png";
import hour from "@/assets/admin/info/时.png";
import { onMounted } from "vue";
import * as echarts from "echarts";
import { GridComponent } from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);
onMounted(() => {
  //需要获取到element,所以是onMounted的Hook
  let myChart = echarts.init(document.getElementById("chart"));
  var option = {
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["1", "2", "3", "4", "5", "6", "7","8","9","10","11","12"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        areaStyle: {},
      },
    ],
  };

  window.onresize = function () {
    //自适应大小
    option && myChart.setOption(option);
  };
});
</script>

<style lang="scss" scoped>
#maindiagram {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  margin-top: 0.5em;
  width: 95%;
  display: flex;
  justify-content: space-between;
  font-size: 28px;
}
.info {
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  .block {
    width: 30vw;
    height: 15vh;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;

    img {
      height: 56.25%;
      margin: 0 2em 0 2em;
      font-size: 16px;
    }
    .use {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: space-between;
      height: 55%;
      width: 8vw;
      .num {
        width: 8vw;
        font-size: 1.2vw;
        color: #208bfc;
      }
      .name {
        color: #272727;
      }
    }
    .line {
      width: 0;
      height: 80%;
      border: 1px solid #dfdfdf;
    }
    .left {
      margin-left: 0.9em;
      width: 18em;
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: space-around;
      .bo {
        width: 6em;
        display: flex;
        height: 70%;
        flex-direction: column;
        justify-content: space-between;
        .title {
          font-size: 18px;
        }
        .icon {
          width: 100%;
          display: flex;
          align-items: center;
          img {
            height: 1.5em;
            margin: 0;
          }
          .num {
            font-size: 16px;
            color: #202020;
            font-weight: 600;
          }
          .init {
            font-size: 12px;
            color: #202020;
          }
        }
      }
    }
  }
}
#chart {
  width: 100vw;
  height: 40vh;
}
</style>