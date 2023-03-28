import { createRouter, createWebHashHistory } from 'vue-router'

// 1. 定义路由组件.
// 也可以从其他文件导入
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Email from '../views/Email.vue'
import NotFound from '../views/NotFound.vue'
import New from '../views/New.vue'
import Parent from '../views/Parent.vue'
import Left from '../views/Left.vue'
import Rigth from '../views/Right.vue'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
// 注意，多个路由之间有循序可言，即从上到下一次进行路径的匹配
const routes = [
  { path: '/', component: Home },

  { path: '/about', component: About },

  // 动态路由携带单个参数
  { path: '/user/:id/', component: User },

  // 动态路由携带多个参数
  { path: '/email/:id/posts/:postId', component: Email },

  // 使用正则匹配动态路由的参数类型：参数必须是数字
  // { path: '/new/:id(\\d+)', component: New },

  // 使用正则匹配动态路由的参数个数：至少一个，且类型不限
  // { path: '/new/:id+', component: New },

  // 使用正则匹配动态路由的参数个数：任意个数，且类型不限
  { path: '/new/:id*', component: New },

  // 嵌套路由
  { 
    path: '/parent', 
    component: Parent, 
    children: [
      {
        path: "Left",
        component: Left
      },
      {
        path: "Right",
        component: Rigth
      }
    ] 
  },

  // 使用正则匹配 404
  { path: '/:path(.*)', component: NotFound },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router