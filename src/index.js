import Vue from "vue";
import App from "./App.vue";

let indexcss = require("./common/css/index.css")
console.log("=====index.js=====")
console.log(indexcss);
let app = new Vue({
    el : "#root",
    data: {
        message:"Hello,message"
    },
    render: function(createElement){
        return createElement(App) ;
    }
})