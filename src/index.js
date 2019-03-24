
import Vue from "vue";
import App from "./App.vue";

let indexcss = require("./common/css/index.css")
console.log("=====index.js=====")

console.log(Vue.default);

function rootElement(){
    let ele = document.createElement("div") ;
    ele.id = "root" ;
    return ele;
}
document.body.appendChild(rootElement());

let app = new Vue({
    el : "#root",
    data: {
        message:"Hello,message!"
    },
    render: function(createElement){
        return createElement(App) ;
    }
})
