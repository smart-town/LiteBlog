<template>
  <div>
    <div class="card" style="width:15rem">
        <div class="card-body">
            <div class="card-title">说明</div>
            <div class="card-text">测试嵌套路由</div>
            <button class="btn btn-warning" v-on:click="gotoSub">测试带子路径</button>
        </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
    methods: {
        gotoSub: function(){
            console.log("test embeded routes ")
            this.$router.push("/TestEmbededRoutes/embeded1");
        }
    }
};
</script>
<style>
</style>