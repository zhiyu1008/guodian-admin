<template>
  <div id="maindiagram">
    <div class="title">
      <div>信息筛选</div>
      <div
        class="refresh"
        :style="{ backgroundImage: `url(${refresh})` }"
      ></div>
    </div>
    <div class="nav">
      <div class="search">
        <div class="block">站点名称：<el-input v-model="input" /></div>
        <div class="block">接入方式：<el-input v-model="input" /></div>
        <div class="block">数据诊断：<el-input v-model="input" /></div>
        <div class="block">投运日期：<el-input v-model="input" /></div>
        <div class="block">省份：<el-input v-model="input" /></div>
        <div class="block">区域：<el-input v-model="input" /></div>
        <div class="block">运维公司：<el-input v-model="input" /></div>
        <div class="block">站点类型：<el-input v-model="input" /></div>
        <div class="block">电压等级：<el-input v-model="input" /></div>
        <div class="block">投运状态：<el-input v-model="input" /></div>
        <div class="block">站点地址：<el-input v-model="input" /></div>
        <div class="block">地市：<el-input v-model="input" /></div>
        <div class="block">所属公司：<el-input v-model="input" /></div>
        <div class="block">变压器数：<el-input v-model="input" /></div>
      </div>
      <div class="action">
        <div class="block btu" style="justifyContent: space-between">
          <div class="button1">查询</div>
          <div class="button2">重置</div>
        </div>
         <div class="block">
          <el-input
          style="width:110px;height:30px;font-size:10px;"
            class="searchinput"
            v-model="input"
            placeholder="输入关键字查询"
          />
        </div>
      </div>
    </div>

    <div class="table">
      <el-table
        :data="tableData"
        style="width: 100%"
        :table-layout="'auto'"
        :header-cell-style="{ background: '#3B507F', color: '#fff' }"
      >
        <el-table-column prop="name" label="站点名称"> </el-table-column>
        <el-table-column prop="class" label="站点类型"> </el-table-column>
        <el-table-column prop="method" label="接入方式"> </el-table-column>
        <el-table-column prop="level" label="电压等级"> </el-table-column>
        <el-table-column label="数据诊断(近3日)" sortable>
          <template #default="scope">
            <div
              class="percentage"
              :style="{ backgroundImage: `url(${background})` }"
            >
              {{ scope.row.percentage }}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="zhuangtai" label="投运状态"> </el-table-column>
        <el-table-column prop="date" label="投运日期"> </el-table-column>
        <el-table-column prop="place" label="站点地址"> </el-table-column>
        <el-table-column prop="province" label="省份"> </el-table-column>
        <el-table-column prop="city" label="城市"> </el-table-column>
        <el-table-column prop="region" label="区域"> </el-table-column>
        <el-table-column prop="OM" label="所属公司"> </el-table-column>
        <el-table-column label="主线图是否绘制">
          <template #default="scope">
            {{ scope.row.y == true ? "是" : "否" }}
          </template>
        </el-table-column>
        <el-table-column prop="num" label="变压器数量"> </el-table-column>
        <el-table-column prop="all" label="总容量"> </el-table-column>
      </el-table>
    </div>
    <div class="footer">
      <div class="downExcel">导出表单</div>
      <!-- 分页器 -->
      <div class="fenye">
        <el-pagination
          v-model:current-page="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[100, 200, 300, 400]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import refresh from "@/assets/admin/clicked/刷新.png";
import background from "@/assets/admin/clicked/矩形18.png";
const tableData = [
  {
    name: "隆升玩具站点",
    class: "变配电站",
    method: "直采集",
    level: "10kv",
    percentage: "100%",
    zhuangtai: "已投运",
    date: "2022-11-27",
    place: "白龙山街道凌 云街129号",
    province: "浙江省",
    city: "丽水市",
    region: "云和县",
    firm: "浙江隆升玩具 有限公司",
    OM: "丽水分公司",
    y: true,
    num: 1,
    all: 200,
  },
  {
    name: "隆升玩具站点",
    class: "变配电站",
    method: "直采集",
    level: "10kv",
    percentage: "100%",
    zhuangtai: "已投运",
    date: "2022-11-27",
    place: "白龙山街道凌 云街129号",
    province: "浙江省",
    city: "丽水市",
    region: "云和县",
    firm: "浙江隆升玩具 有限公司",
    OM: "丽水分公司",
    y: true,
    num: 1,
    all: 200,
  },
  {
    name: "隆升玩具站点",
    class: "变配电站",
    method: "直采集",
    level: "10kv",
    percentage: "100%",
    zhuangtai: "已投运",
    date: "2022-11-27",
    place: "白龙山街道凌 云街129号",
    province: "浙江省",
    city: "丽水市",
    region: "云和县",
    firm: "浙江隆升玩具 有限公司",
    OM: "丽水分公司",
    y: true,
    num: 1,
    all: 200,
  },
  {
    name: "隆升玩具站点",
    class: "变配电站",
    method: "直采集",
    level: "10kv",
    percentage: "100%",
    zhuangtai: "已投运",
    date: "2022-11-27",
    place: "白龙山街道凌 云街129号",
    province: "浙江省",
    city: "丽水市",
    region: "云和县",
    firm: "浙江隆升玩具 有限公司",
    OM: "丽水分公司",
    y: true,
    num: 1,
    all: 200,
  },
  {
    name: "隆升玩具站点",
    class: "变配电站",
    method: "直采集",
    level: "10kv",
    percentage: "100%",
    zhuangtai: "已投运",
    date: "2022-11-27",
    place: "白龙山街道凌 云街129号",
    province: "浙江省",
    city: "丽水市",
    region: "云和县",
    firm: "浙江隆升玩具 有限公司",
    OM: "丽水分公司",
    y: true,
    num: 1,
    all: 200,
  },
  {
    name: "隆升玩具站点",
    class: "变配电站",
    method: "直采集",
    level: "10kv",
    percentage: "100%",
    zhuangtai: "已投运",
    date: "2022-11-27",
    place: "白龙山街道凌 云街129号",
    province: "浙江省",
    city: "丽水市",
    region: "云和县",
    firm: "浙江隆升玩具 有限公司",
    OM: "丽水分公司",
    y: true,
    num: 1,
    all: 200,
  },
  {
    name: "隆升玩具站点",
    class: "变配电站",
    method: "直采集",
    level: "10kv",
    percentage: "100%",
    zhuangtai: "已投运",
    date: "2022-11-27",
    place: "白龙山街道凌 云街129号",
    province: "浙江省",
    city: "丽水市",
    region: "云和县",
    firm: "浙江隆升玩具 有限公司",
    OM: "丽水分公司",
    y: true,
    num: 1,
    all: 200,
  },
  {
    name: "隆升玩具站点",
    class: "变配电站",
    method: "直采集",
    level: "10kv",
    percentage: "100%",
    zhuangtai: "已投运",
    date: "2022-11-27",
    place: "白龙山街道凌 云街129号",
    province: "浙江省",
    city: "丽水市",
    region: "云和县",
    firm: "浙江隆升玩具 有限公司",
    OM: "丽水分公司",
    y: true,
    num: 1,
    all: 200,
  },
  {
    name: "隆升玩具站点",
    class: "变配电站",
    method: "直采集",
    level: "10kv",
    percentage: "100%",
    zhuangtai: "已投运",
    date: "2022-11-27",
    place: "白龙山街道凌 云街129号",
    province: "浙江省",
    city: "丽水市",
    region: "云和县",
    firm: "浙江隆升玩具 有限公司",
    OM: "丽水分公司",
    y: true,
    num: 1,
    all: 200,
  },
  {
    name: "隆升玩具站点",
    class: "变配电站",
    method: "直采集",
    level: "10kv",
    percentage: "100%",
    zhuangtai: "已投运",
    date: "2022-11-27",
    place: "白龙山街道凌 云街129号",
    province: "浙江省",
    city: "丽水市",
    region: "云和县",
    firm: "浙江隆升玩具 有限公司",
    OM: "丽水分公司",
    y: true,
    num: 1,
    all: 200,
  },
];
</script>

<style lang="scss" scoped>
#maindiagram {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1em;
}
.title {
  width: 99%;
  display: flex;
  align-items: center;
  font-size: 20px;
  justify-content: space-between;
  .refresh {
    width: 25px;
    height: 25px;
    cursor: pointer;
    background-color: #ffffff;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
}
.nav{
  display:flex;
  align-items: center;
  .action{
    margin-left:20px;
    position: relative;
    top:10px;
    .btu{
      display:flex;
      align-items:center;
      margin-bottom:5px;
    }
    .button1 {
      background: #2a2861;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      border-radius: 4px;
      cursor: pointer;
      height: 25px;
    }
    .button2 {
      width: 50px;
      border-radius: 4px;
      cursor: pointer;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #2a2861;
    }
  }
}
.search {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  .block {
    font-size: 16px;
    margin-top: 1em;
    width: 14.2%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size:14px;
    .el-input {
      width: 50%;
      height:20px;
      display: flex;
      justify-content: center;
      border:1px dashed #333;
      outline: none;
      box-shadow: none;
    }
    .searchinput {
      width: 100%;
    }
  }
}
.percentage {
  height: 2em;
  width: 8em;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  overflow: hidden;
}
.table {
  margin-top: 2em;
  width: 100%;
}

.footer{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background:#ffffff;
  padding-bottom:10px;
  .downExcel{
    padding:5px 15px;
    border:1px solid #3d5081;
    color:#2c4482;
    width:70px;
    position:relative;
    left:5px;
    top:5px;
  }
  .fenye {
    margin: 1em 1em 0 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
}

</style>