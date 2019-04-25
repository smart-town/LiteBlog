<template>
<div>
    <div class="example">{{msg}}</div>
    <input class="btn btn-primary" v-on:click="gotoTest" value="test" type="button"/>
</div>
</template>

<script>
export default {
    data(){
        return {
            msg: "INDEX"
        }
    },
    methods: {
        gotoTest: function(){this.$router.push("/test")}
    }
}
</script>

<style>
    .example {
        color : red;
        border: 1px solid lightblue;
        text-align: center;
    }
</style>