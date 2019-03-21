import Vue from "vue/dist/vue.js";
let indexcss = require("./common/css/index.css")
console.log("=====index.js=====")
console.log(indexcss);
console.log(Vue);
console.log(Vue.default);
let app = new Vue({
    el : "#root",
    data: {
        message:"Hello,message"
    }
})
