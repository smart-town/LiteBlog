import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router" ;
import Header from "./components/Header.vue" ;
import TestEntry from "./components/test/TestEntry.vue" ;
import DynamicUrl from "./components/test/DynamicUrl.vue" ;
import TestEmbededRoutes from "./components/test/TestEmbededRoutes.vue";
import EmbedNameView from "./components/test/EmbedNameView.vue";
import BasicTest from "./components/test/BasicTest.vue";
import TestPureJs from "./components/test/TestPureJs.vue";
import Component1 from "./components/test/Component1.vue";
import GlobalDefine from "./common/GlobalDefine.js";
import 'bootstrap/dist/css/bootstrap.css';

Vue.prototype.vscode=GlobalDefine.vscode;

Vue.use(VueRouter) ;//模块化工程中使用需要明确安装路由功能

//定义路由
const routes = [
    {path: '/app', name: 'app', component: App},
    {
       path: '/Component1',
       name: 'Component1',
       component: Component1
    },
    {path: '/header', component: Header},
    {path: '/test', component: TestEntry},
    {path: '/dynamicUrl/:id', component: DynamicUrl},
    {path: '/TestEmbededRoutes', component: TestEmbededRoutes,
     children:[
        {path: '', component:App},
        {path: 'embeded1', component: Header},
     ]},
     {
        path: '/EmbedNameView/:test', component: EmbedNameView,
         children: [
            {path: '', component: App},
            {path: 'test', components:{
               default: App,
               a: Header,
            }}
         ]
     },
     {
        path: '/BasicTest',
        component: BasicTest,
        name: 'BasicTest',
        props: true,
     },
     {
        path: '/TestPureJs',
        component: TestPureJs,
     }
] ;
//注入路由器后，可以在任何组件内通过`this.$router`访问路由器。通过this.$route访问当前路由

function rootElement(){
    let ele = document.createElement("div") ;
    ele.id = "root" ;
    // ele.innerHTML = `<p><router-link to='/app'>Go</router-link><router-link to='/header'>header</router-link></p>
    //                 <router-view></router-view>`;
    ele.innerHTML = `<router-view></router-view>`
                     //<router-view class="view two" name="test"></router-view>`;
    return ele;
}
document.body.appendChild(rootElement());


const router = new VueRouter({routes: routes}) ;

router.push({
   name: 'app'
});

router.beforeEach((to,from,next)=>{
   console.log("前置守卫...beforeEach") ;
   console.log(`to:`,to)
   next();
})

Vue.component("Component1",Component1);
const app = new Vue({router}).$mount("#root") ;