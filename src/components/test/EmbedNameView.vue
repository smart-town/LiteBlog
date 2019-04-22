<template>
    <div>
        <div class="btn-group" role="group">
            <button type="button" class="btn btn-secondary">Left</button>
            <button type="button" class="btn btn-secondary" v-on:click="complex">Middle</button>
            <button type="button" class="btn btn-secondary">Right</button>
        </div>
        <router-view/>
        <router-view name="a"/>
    </div>
</template>
<script>
export default{
    methods: {
        complex: function(){
            this.$router.push("/EmbedNameView/2/test");
        }
    }
}
</script>
<style>
</style>