<template>
<div>
    <header class="my-header">{{msg}}</header>
    <button v-on:click="log" class="btn btn-primary">show</button>
</div>
</template>

<script>
    export default {
        data(){
            return {
                msg: 'data-msg-1',
            }
        },
        methods:{
            log: function(){
                console.log("===log route:",this.$route);
                this.$router.push("/app");
            }
        }
    }
</script>

<style>
    .my-header {
        text-align: center;
        border: 1px solid lightblue;
    }
</style>