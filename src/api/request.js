//对axios进行二次封装,将刚才下载好的axios导入进来
import axios from "axios";
//1.利用axios对象的方法create,去创建一个axios实例
//2.requests就是axios,只不过稍微配置一下
const request = axios.create({
    //配置对象
    //基础路径，发请求的时候，路径当中会出现api，不用你手写
    baseURL: "https://guodian.lishuidingtalk.com"
    //请求时间超过5秒
    // timeout: 5000
});
// 添加请求拦截器
request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
request.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });

//对外暴露requests(axios的二次封装)
export default request;