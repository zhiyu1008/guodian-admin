<template>
  <div id="maindiagram">
    <div class="title">
      <div>部门管理</div>
      <div class="buttongrounp">
        <div class="button1">筛选</div>
        <div class="button2">重置</div>
      </div>
    </div>
    <div class="top">
      <div class="select">
        国家
        <el-select
          v-model="value"
          class="m-2"
          size="large"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="select">
        省份
        <el-select
          v-model="value"
          class="m-2"
          size="large"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="select">
        地市
        <el-select
          v-model="value"
          class="m-2"
          size="large"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="select">
        地区
        <el-select
          v-model="value"
          class="m-2"
          size="large"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="select">
        企业站点
        <el-select
          v-model="value"
          class="m-2"
          size="large"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>
    <div class="search">
      <el-input
        v-model="input1"
        class="w-50 m-2"
        size="large"
        placeholder="输入关键词搜索"
        :suffix-icon="Search"
      />
      <div class="searchbutton">搜索</div>
    </div>
    <div class="info">
      <div class="block">
        <div class="name" :style="{ backgroundImage: `url(${background})` }">
          企业站点
        </div>
      </div>
      <div class="block">
        <div class="name" :style="{ backgroundImage: `url(${background})` }">
          数据采集方式
        </div>
      </div>
      <div class="block">
        <div class="name" :style="{ backgroundImage: `url(${background})` }">
          生产厂家
        </div>
      </div>
      <div class="block">
        <div class="name" :style="{ backgroundImage: `url(${background})` }">
          protocolCode
        </div>
      </div>
      <div class="block">
        <div class="name" :style="{ backgroundImage: `url(${background})` }">
          协议
        </div>
      </div>
      <div class="block">
        <div class="name" :style="{ backgroundImage: `url(${background})` }">
          型号
        </div>
      </div>
      <div class="block">
        <div class="name" :style="{ backgroundImage: `url(${background})` }">
          采集频率
        </div>
      </div>
      <div class="block">
        <div class="name" :style="{ backgroundImage: `url(${background})` }">
          名称
        </div>
      </div>
      <div class="block">
        <div class="name" :style="{ backgroundImage: `url(${background})` }">
          通讯范围
        </div>
      </div>
      <div class="block">
        <div class="name" :style="{ backgroundImage: `url(${background})` }">
          状态
        </div>
      </div>
      <div class="block">
        <div class="name" :style="{ backgroundImage: `url(${background})` }">
          网关id
        </div>
      </div>
      <div class="block">
        <el-radio-group class="radio" v-model="radio3">
          <el-radio-button label="刷新" />
          <el-radio-button label="对时" />
          <el-radio-button label="总招" />
        </el-radio-group>
      </div>
    </div>
    <div class="table">
      <el-table :data="tableData" style="width: 100%" :table-layout="'auto'" :header-cell-style="{background: '#e5e7ee',color:'#87888A'}" max-height="100%">
        <el-table-column prop="department">
          <template #header>
            <div class="head">部门层级</div>
          </template>
        </el-table-column>
        <el-table-column prop="detype">
          <template #header>
            <div class="head">站点类型</div>
          </template>
        </el-table-column>
        <el-table-column prop="entertype">
          <template #header>
            <div class="head">接入方式</div>
          </template>
        </el-table-column>
        <el-table-column prop="deaddress">
          <template #header>
            <div class="head">站点地址</div>
          </template>
        </el-table-column>
        <el-table-column prop="show">
          <template #header>
            <div class="head">查看</div>
          </template>
        </el-table-column>
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
import background from "@/assets/admin/clicked/矩形18.png";
import { Search } from "@element-plus/icons-vue";
import { ref } from "vue";
const radio3 = ref("New York");
const tableData = [
  {
    department: "纳爱斯集团站点",
    detype: "变配电站",
    entertype: "直采集",
    deaddress: "浙江省丽水市莲都区天宁工业园",
    show: "No. 189, Grove St, Los Angeles",
  },
  {
    department: "纳爱斯集团站点",
    detype: "变配电站",
    entertype: "直采集",
    deaddress: "浙江省丽水市莲都区天宁工业园",
    show: "No. 189, Grove St, Los Angeles",
  },
  {
    department: "纳爱斯集团站点",
    detype: "变配电站",
    entertype: "直采集",
    deaddress: "浙江省丽水市莲都区天宁工业园",
    show: "No. 189, Grove St, Los Angeles",
  },
  {
    department: "纳爱斯集团站点",
    detype: "变配电站",
    entertype: "直采集",
    deaddress: "浙江省丽水市莲都区天宁工业园",
    show: "No. 189, Grove St, Los Angeles",
  },
  {
    department: "纳爱斯集团站点",
    detype: "变配电站",
    entertype: "直采集",
    deaddress: "浙江省丽水市莲都区天宁工业园",
    show: "No. 189, Grove St, Los Angeles",
  },
];
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
  .buttongrounp {
    margin-top:20px;
    font-size: 15px;
    display: flex;
    div {
      cursor: pointer;
      width: 4em;
      height: 2em;
      margin-left: 1em;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .button1 {
      background: #1f4ca7;
      border:1px dashed #333;
      color: #fff;
    }
    .button2 {
      color: #000;
      border:1px dashed #333;
    }
  }
}
.top {
  width: 100%;
  font-size: 22px;
  line-height: 3em;
  display: flex;
  box-sizing: border-box;
  padding-left:30px;
  .select {
    margin-left: 1.5em;
    ::v-deep .el-input {
      width:190px !important;
      height:35px;
      border:1px dashed #333;
    }
  }
}
.table {
  width: 95%;
  .el-table{
    height: 291px;
  }
}
.search {
  margin: 1.5em 0 0 60px;
  display: flex;
  height: 2em;
  justify-content: flex-start;
  width: 100%;
  .el-input {
    width: 18em;
    font-size: 16px;
    height: 2em;
    outline:none;
    margin-left: 2em;
    border:1px dashed #333;
  }
  .searchbutton {
    margin-left:30px;
    cursor: pointer;
    background: #1f4ca7;
    border:1px dashed #333;
    font-size: 16px;
    height: 2em;
    width: 4em;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
}
.info {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 1em;
  padding-left: 4%;
  .block {
    margin-top: -1px;
    width: 24%;
    font-size: 22px;
    display: flex;
    align-items: center;
    .radio {
      margin-top:10px;
      width: 50%;
      display: flex;
      justify-content:space-between;
      align-items: center;
      .el-radio-button{
        width: 20%;
      }
    }
    .name {
      float: left;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      color: #fff;
      height: 1.5em;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 9em;
    }
  }
}
.footer{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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


.table{
  margin-top: 2em
}
</style>