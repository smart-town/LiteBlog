let vue = require("vue");
let indexcss = require("./common/css/index.css")
console.log("=====index.js=====")
console.log(indexcss);
let app = new Vue({
    el : "#root",
    data: {
        message:"Hello,message"
    }
})