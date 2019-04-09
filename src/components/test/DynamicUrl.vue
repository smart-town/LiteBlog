<template>
    <div>
    动态路由匹配
    <ul>
        <li>动态路径参数以冒号开头<code>/dynamicUrl/:id==>this.$route.params</code>:{{getParam}}</li>
    </ul>
    </div>
</template>
<script>
export default {
    computed: {
        getParam: function(){
            return this.$route.params
        }
    }
}
</script>


