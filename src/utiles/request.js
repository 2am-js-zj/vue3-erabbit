// 1.初始化axios实例
// 2.请求拦截器 带token
// 3.响应拦截器，1.剥离无效数据 2. 处理token失效 (拿出响应数据，拦截token生效)
// 4.导出一个函数使用配置好的axios发请求，返回这promise
// 得到：请求工具函数

import axios from "axios";
import store from "@/store";
import router from "@/router";

// 导出基准地址，原因，其他地方不是通过axios发请求的地方用上基准地址
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  // axios的一些配置，baseURL  timeout
  baseURL,
  timeout: 5000,
})

// 请求拦截器
instance.interceptors.request.use((config) => {
  // 拦截业务逻辑

  // 进行请求配置的修改
  // 如果本地有token就在头部携带token
  // 1.获取用户信息对象
  const { profile } = store.state.user
  console.log(profile.token)
  // 2.判断用户是否有token
  if (profile.token) {
    // 3.设置token
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
}, (err) => {
  return Promise.reject(err)
})

// 剥离无效数据
//res => data 取出data数据，将来调用接口的时候，直接拿到的就是后台的数据
instance.interceptors.response.use(res => res.data, err => {
  // 处理无效token

  // 401 状态码，进入该函数
  if (err.response && err.response.status === 401) {
    // 1.清空本地无效的用户信息
    // 2.跳转到登录页面
    // 3.跳转需要传参(当前路由地址)
    store.commit("user/setUser", {})
    // 当前路由地址
    // 组件里头：'/user?a=100' $route.path === /user  $route.fullpath === user?a=10
    // js模块中：router.currentRoute.value.fullPath 就是当前路由地址  router.currentRoute 是ref响应式数据
    // encodeURIComponent转换uri编码
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    router.push('/login?redirectUrl=' + fullPath)
  }
  return Promise.reject(err)
})


// 请求工具函数

export default (url, method, submitData) => {
  // 负责发请求：请求地址，请求方式，提交的数据
  return instance({
    method,
    url,
    // 如果是get请求 需要使用params来传递submitData
    // 如果不是get请求 需要使用data来传递submitData
    // []:submitData 设置一个动态的key，写js表达式，js表达式的执行结果当作key
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
