import Vue from 'vue';

import App from './App.vue';

//引入公共的scss  注意：创建项目的时候必须用scss

import './assets/css/basic.scss'

// 请求数据
import VueResource from 'vue-resource';

Vue.use(VueResource);


/**路由 */
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false



/**1. 创建组件 引入组件 */
import Home from "./components/Home.vue";
import News from "./components/News.vue";
import Content from "./components/Content.vue";
import PContent from "./components/PContent.vue";


/**2. 定义路由 */
const routes = [
  { path: '/home', component: Home },
  { path: '/news', component: News },
  { path: '/content', component: Content }, //动态路由
  { path: '/pcontent', component: PContent }, //动态路由
  { path: '*', redirect: '/home' }
]

// 3.实例化路由
const router = new VueRouter({
  routes 
})


// 4. 挂载路由
new Vue({

  router,
  render: h => h(App),
}).$mount('#app')




/*
  --配置vue路由--地址https://router.vuejs.org/installation.html#direct-download-cdn

  1. 安装vue-router： 
    npm install vue-router
 
  2. 在main.js引入
      import VueRouter from 'vue-router'

        Vue.use(VueRouter)    

  3. 配置路由 五大步骤！

        1. 创建组件 引入组件
          const Foo = { template: '<div>foo</div>' }
          const Bar = { template: '<div>bar</div>' }
        
        2. 定义路由 （建议复制）
          const routes = [
              { path: '/foo', component: Foo },
              { path: '/bar', component: Bar }，
              { path: '*', redirect: '/foo' }  -->添加默认路由
        ]
          

        3. 实例化VueRouter
          const router = new VueRouter({
            routes // short for `routes: routes`
          })
        
        4. 挂载

        new Vue({
            router,
            render: h => h(App),
          }).$mount('#app')

        5. 根组件的模板里面放上这句话 
          <router-view></router-view>

*/