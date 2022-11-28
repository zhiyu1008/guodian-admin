<template>
  <div class="hellow" :style="{ backgroundImage: `url(${img})` }">
    <div class="content" :style="{ backgroundImage: `url(${content})` }">
      <div class="title">产业链管理登录系统</div>
      <div class="body">
        <div class="left">
          <div class="form">
            <el-input v-model="logininfo.id" placeholder="手机/邮箱/用户名">
              <template #prefix>
                <el-icon class="el-input__icon"><User /></el-icon>
              </template>
            </el-input>
            <el-input
              v-model="logininfo.password"
              type="password"
              placeholder="请输入您的登录密码"
              show-password
              class="password"
            >
              <template #prefix>
                <el-icon><Unlock /></el-icon>
              </template>
            </el-input>
            <div class="code">
              <el-input
                v-model="logininfo.code"
                placeholder="请输入验证码"
                class="code"
              >
                <template #prefix>
                  <el-icon><User /></el-icon>
                </template>
              </el-input>
              <img
                class="codeimg"
                :src="`${codeimg}`"
                alt=""
                @click="refreshcode()"
              />
            </div>

            <div class="check">
              <div class="checked" @click="check">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  v-model="logininfo.remeber"
                />
                记住用户名
              </div>
              <a class="forget">忘记密码</a>
            </div>
            <div class="load" @click="login()">立即登录</div>
            <div class="create">没有账户，马上注册</div>
          </div>
        </div>
        <div class="right">
          <img :src="right" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import img from "@/assets/login/background.png";
import content from "@/assets/login/content.png";
import right from "@/assets/login/login_right.png";
import { ref } from "vue";
import { User, Unlock } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import request from "@/api/request.js";
import axios from "axios";
const codeimg = ref("http://localhost:8080/img/content.fe00f4e3.png");
axios({
  method: "get",
  url: "https://guodian.lishuidingtalk.com/captcha/captchaImage?type=math",
  responseType: "blob",
}).then((res) => {
  console.log(localStorage)
  const imgCodeUrl = window.URL.createObjectURL(res.data);
  codeimg.value = imgCodeUrl;
});

const router = useRouter();
const refreshcode = () => {
  axios({
    method: "get",
    url: "https://guodian.lishuidingtalk.com/captcha/captchaImage?type=math",
    responseType: "blob",
  }).then((res) => {
    
    const imgCodeUrl = window.URL.createObjectURL(res.data);
    codeimg.value = imgCodeUrl;
  });
};
refreshcode()
let logininfo = ref({
  id: "",
  password: "",
  code: "",
  rememberMe: false,
});
//是否记住
const check = () => {
  logininfo.value.remeber = !logininfo.value.remeber;
};
//登录
const login = async () => {
  if (logininfo.value.id != "" && logininfo.value.password != "") {
    try {
    const msg=  await request({
        url: "login",
        method: "post",
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        data: {
          username: `${logininfo.value.id}`,
          password: `${logininfo.value.password}`,
          validateCode: `${logininfo.value.code}`,
          rememberMe: logininfo.value.rememberMe,
        },
      });
      // localStorage.setItem("token", login.data.data.token);
      // localStorage.setItem(
      //   "rule",
      //   JSON.stringify(login.data.data.userinfo.roles)
      // );

      // localStorage.setItem("all", JSON.stringify(quanxian.data.data));
      msg.data.code!=500&&router.push({ path: "/admin/user" });
      msg.data.code==500&&ElMessage.error("验证码错误");
    } catch (error) {
      ElMessage.error(error);
    }
  }
  logininfo.value.id == "" && ElMessage.error("请输入手机/邮箱/用户名");
  logininfo.value.password == "" && ElMessage.error("请输入密码");
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hellow {
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  .content {
    margin-top: 22.5vh;
    margin-left: 15.96vw;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 65.1%;
    height: 60.87%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .title {
      width: 10em;
      font-size: 5.2vh;
      color: #5d5d5d;
      margin-top: 1.25em;
    }
  }

  .body {
    width: 100%;
    display: flex;
    height: calc(100% - 5.56vh - 22.5vh);
    align-items: center;
    justify-content: space-between;
    padding-right: 10.66vw;
    padding-left: 9.54vw;
    .right {
      height: 45vh;
      img {
        height: 100%;
      }
    }
    .left {
      width: 15.15vw;
      .form {
        .password {
          margin-top: 30px;
          width: 15.15vw;
        }
        .code {
          margin-top: 15px;
          width: 15.15vw;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        .check {
          margin-top: 28px;
          width: 100%;
          font-size: 12px;
          display: flex;
          justify-content: space-between;
          .checked {
            cursor: pointer;
            display: flex;
            align-items: center;
            input {
              margin-right: 1em;
            }
          }
          .forget {
            cursor: pointer;
          }
        }
        .load {
          cursor: pointer;
          height: 3.7vh;
          width: 15.15vw;
          display: flex;
          align-items: center;
          justify-content: center;
          background-repeat: no-repeat;
          margin-top: 30px;
          background: #031859;
          border-radius: 5px;
          font-size: 2vh;
          color: #ffffff;
          font-family: Microsoft YaHei;
        }
        .create {
          cursor: pointer;
          margin-top: 10px;
          width: 100%;
          font-size: 12px;
          text-align: center;
          font-family: PingFangSC-Regular;
          color: #7e7e7e;
        }
      }
    }
  }
}
.codeimg {
  height: 2em;
  margin-top: 15px;
  cursor: pointer;
}
</style>
