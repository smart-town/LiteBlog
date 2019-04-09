import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router" ;
import Header from "./components/Header.vue" ;
import TestEntry from "./components/test/TestEntry.vue" ;
import DynamicUrl from "./components/test/DynamicUrl.vue" ;

// import "./common/bootstrap/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(VueRouter) ;//模块化工程中使用需要明确安装路由功能

//定义路由
const routes = [
    {path: '/app', component: App},
    {path: '/header', component: Header},
    {path: '/test', component: TestEntry},
    {path: '/dynamicUrl/:id', component: DynamicUrl},
] ;
//注入路由器后，可以在任何组件内通过`this.$router`访问路由器。通过this.$route访问当前路由

function rootElement(){
    let ele = document.createElement("div") ;
    ele.id = "root" ;
    // ele.innerHTML = `<p><router-link to='/app'>Go</router-link><router-link to='/header'>header</router-link></p>
    //                 <router-view></router-view>`;
    ele.innerHTML = `<router-view></router-view>
                     <router-view class="view two" name="test"></router-view>`;
    return ele;
}
document.body.appendChild(rootElement());


const router = new VueRouter({routes: [{
    path: '/',
    components: {
        default: Header,
        test: TestEntry,
    }
},
    {
        path: '/dynamicUrl/:id',
        components : {
            default: Header,
            test: DynamicUrl,
        }
    }
]}) ;
router.push("/");
// const router = new VueRouter({routes:routes}) ;
// router.push("/test") ;

const app = new Vue({router}).$mount("#root") ;

// let app = new Vue({
//     el : "#root",
//     data: {
//         message:"Hello,message!"
//     },
//     render: function(createElement){
//         return createElement(router) ;
//     }
// })
