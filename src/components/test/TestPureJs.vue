<template>
    <div>
        <label id="testpure1" class="text-info">获得通知:</label><code>{{data1}}</code><br/>
        <!-- <label class="bg-info"></label> -->
        <input v-model="inputdata"><br/>
        <br/><button class="btn btn-info" id="testpureBtn" @click="test">SEND</button>
    </div>
</template>
<script>
import GlobalDefine from "../../common/GlobalDefine.js";
export default{
    data: function(){
        return {
            data1: "initial", //获得数据
            inputdata:'', //输入数据
        }
    },
    methods: {
        test: function(){
            if(GlobalDefine.vscode === "fail") {
                console.log("initial vscode failure") ;
                this.data1 = "initial vscode failure";
            } else {
                GlobalDefine.vscode.postMessage({
                    command: "warn",
                    message: this.inputdata,
                })
            }
        },
        getMessage: function(event){
            this.data1 = event.data.message;
        }
    },
    created: function(){
        if(GlobalDefine.vscode !== "fail") {
            window.addEventListener("message",this.getMessage);
        }
    }
}
</script>
<style>
</style>