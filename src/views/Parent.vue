<template>
    <div>Parent</div>
    <router-link to="/parent/left">Left</router-link><br>
    <router-link to="/parent/right">Right</router-link>

    <!-- 路由出口 -->
    <router-view></router-view>
</template>