<!-- 通过 Vue3 的方式获取路由参数 -->
<script setup>
    import {useRoute} from 'vue-router';
    // useRoute() 返回一个当前活跃的路由对象
    console.log(useRoute().params);    
</script>

<template>
    <div>Not found page</div>
</template>