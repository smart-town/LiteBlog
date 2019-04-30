<template>
<div>
    <label>{{msg}}</label>
    <input class="btn btn-primary" v-on:click="gotoTest" value="test" type="button"/>
    <Component1 title="test Component" @myevent="listenSun">Something</Component1>
</div>
</template>

<script>
export default {
    data () {
        return {
            msg: "INDEX"
        }
    },
    methods: {
        gotoTest: function(){this.$router.push("/test");},
        listenSun: function(event){alert("监听到子组件事件!"+event.name);}
    }
}
</script>

<style>

</style>