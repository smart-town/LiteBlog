<template>
    <header class="my-header">{{msg}}</header>
</template>

<script>
    export default {
        data(){
            return {
                msg: 'data-msg-1',
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