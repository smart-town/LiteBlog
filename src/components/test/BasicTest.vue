<template>
<div>
  <div class="container">
      <div class="row">
          <div class="col-sm d-flex justify-content-center">
              <button class="btn btn-info">基本测试</button>
              <button class="btn btn-info" v-on:click="transitionTest">transition测试</button>
              <button class="btn btn-info" v-on:click="addAttrTest">响应属性添加</button>
              
          </div>
      </div>
  </div>
  <ul class="list-group">
      <li class="list-group-item">查询参数:<code>{{$route.query}}</code>【配置格式this.$router.push({path:'/path',query:{...})】</li>
      <li class="list-group-item">
          <transition name="slide-fade">
             <div v-if="show">transition test</div>
          </transition>
      </li>
      <li class="list-group-item">
          模板语法之插值：1.文本{{}}<br/>
          2.原始 HTML<code>&lt;span v-html="rawHtml"&gt;&lt;/span&gt;</code><br/>
          3.使用js表达式(必须是单个表达式)<code>{ {ok ? "YES" : "NO"} }</code>
      </li>
      <li class="list-group-item">
          模板语法之指令<code>v-</code>开头，其作用是告诉vue当表达式值改变时，将某些行为应用于DOM上，其相关的还有 参数、动态参数、修饰符
      </li>
      <li class="list-group-item">
          原值 show: {{show}}<br/>
          计算属性get: {{computedValue}}<br/>
          计算属性set: <input v-model="computedValue"/><br/>
      </li>
      <li class="list-group-item">
          v-for测试:<br/>
          <ol>
              <li v-for="(value, key) in forData" :key="key">{{key + "---" + value}}</li>
          </ol>
      </li>
      <li class="list-group-item">
          表单绑定<br/>
          <input type="checkbox" id="checkbox" v-model="checked">
          <br/><label>绑定 checked:{{checked}}</label>
      </li>
      <li class="list-group-item">
          测试传参<button class="btn btn-info" v-on:click="testTransferParam">Go</button><br/>
          {{this.$route.params}}<br/>
          
      </li>
      <!-- <li class="list-group-item">
          测试传参解耦<button class="btn btn-secondary" @click="testParamDecouple">Go</button><br/>
          {{$route}}
      </li> -->
  </ul>
</div>
</template>
<script>
export default {
    data: function(){
        return {
            show: true,
            forData: {
                name: "HHG",
                age: "20",
            },
            checked: true,
        }
    },
    methods:{
        transitionTest: function(){
            this.show = !this.show;
        },
        addAttrTest: function(){
            this.$set(this.forData,"GF", "Cherry");
        },
        testTransferParam: function(){
            this.$router.push({name:'BasicTest', params:{"name":"hhg","age":"20","wife":"cherry"}})
        },
        testParamDecouple: function(){
            this.$router.push({name:'testDecouple',params:{"test":"Decoupling","obj":"params"}})
        }
    },
    computed: {
        computedValue:{
            get: function(){return `data.show:${this.show}`},
            set: function(newValue){if(newValue.indexOf('-')!==-1)this.show=newValue;}
        } 
    }
};
</script>
<style>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>