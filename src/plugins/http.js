//插件模块
import axios from 'axios'

const MyHttpServer = {}

MyHttpServer.install =  (Vue) =>{
  //改成跨域模式config.index
  // axios.defaults.baseURL='http://127.0.0.1/8083'
  Vue.prototype.$http = axios
}

export default MyHttpServer
