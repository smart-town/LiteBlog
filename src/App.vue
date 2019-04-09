<template>
    <div class="example">{{msg}}Cherry</div>
</template>

<script>
export default {
    data(){
        return {
            msg: "Smalltown,"
        }
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