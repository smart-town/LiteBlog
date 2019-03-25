import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router" ;

Vue.use(VueRouter) ;//模块化工程中使用需要明确安装路由功能

let indexcss = require("./common/css/index.css")
console.log("=====index.js=====")
console.log(Vue.default);

//定义路由
const routes = [
    {path: 'app', component: App},
] ;

// router 实例
const router = new VueRouter({routes: routes}) ;

// 创建和挂载根实例
const app = new Vue({router: router}).$mount('#app') ;

//注入路由器后，可以在任何组件内通过`this.$router`访问路由器。通过this.$route访问当前路由

function rootElement(){
    let ele = document.createElement("div") ;
    ele.id = "root" ;
    return ele;
}
document.body.appendChild(rootElement());

// let app = new Vue({
//     el : "#root",
//     data: {
//         message:"Hello,message!"
//     },
//     render: function(createElement){
//         return createElement(App) ;
//     }
// })
