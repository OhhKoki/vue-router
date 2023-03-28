<script setup>
</script>

<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <!--使用 router-link 组件进行导航 -->
      <!--通过传递 `to` 来指定链接 -->
      <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->

      <router-link to="/">Go to Home</router-link><br>

      <router-link to="/about">Go to About</router-link><br>

      <!-- 动态路由携带一个参数 -->
      <router-link to="/user/101">Go to User</router-link><br>

      <!-- 动态路由携带多个参数 -->
      <router-link to="/email/101/posts/201">Go to Email</router-link><br>

      <!-- 使用正则匹配动态路由的参数类型：参数必须是数字 -->
      <router-link to="/new/301">Go to New</router-link><br>

      <!-- 嵌套路由 -->
      <router-link to="/parent">Go to Parent</router-link><br>
    </p>

    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <!-- 即：router-view 就是一个占位符，会在此处展示 router-link 跳转到的组件-->
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
