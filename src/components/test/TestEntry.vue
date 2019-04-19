<template>
  <div>
    <div class="text-center text-info">测试基础页面</div>
    <ul>
      <li>
        <span class="myButton" v-on:click="go(1)">/dynamicUrl/1</span>
      </li>
      <li>
        <span class="myButton" v-on:click="go(2)">/dynamicUrl/2</span>
      </li>
      <li>
        <span class="myButton" v-on:click="go(3)">/embededRoutes/3</span>
      </li>
      <li>
        <span class="myButton" v-on:click="go(4)">。。。</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    go: function(flag) {
      switch (flag) {
        case 1:
          this.$router.push("/dynamicUrl/1");
          break;
        case 2:
          this.$router.push("/dynamicUrl/2");
          break;
        default:
          this.$router.push("/TestEmbededRoutes")
          console.log("default");
      }
    }
  }
};
</script>
<style>
.myButton {
  border: 1px solid black;
  display: inline-block;
  border-radius: 10px;
  width: 150px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
}
.myButton:hover {
  background-color: lightblue;
}
</style>

