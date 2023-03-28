<!-- 通过 Vue2 的方式获取路由参数 -->
<!-- <script>
    export default {
        mounted() {
            // 返回一个当前活跃的路由对象
            console.log(this.$route);
            console.log(this.$route.params);
        }
    }
</script> -->

<!-- 通过 Vue3 的方式获取路由参数 -->
<script setup>
    import {useRoute} from 'vue-router';
    // useRoute() 返回一个当前活跃的路由对象
    console.log(useRoute().params.id);
    
</script>


<template>
    <div>User</div>
</template>