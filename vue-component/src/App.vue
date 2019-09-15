<template>
  <div id="app">
  <header class="header">
    <router-link to="/home">Home-主页</router-link>
    <router-link to="/news">News-新闻</router-link>
  </header>
    
    <router-view></router-view>
  </div>
</template>

<script>
/*
  1. 不同路由传值：动态路由
    routes: [
    // dynamic segments start with a colon
    { path: '/user/:id', component: User }
  ]

  2. 在对应的页面
    this.$route.params

  #OR ————————————————————————
  get传值
  
  1.routes: [
    // dynamic segments start with a colon
    { path: '/user', component: User }
  ]
  
  2. 在对应的页面
    this.$route.query
*/
export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.header{
  height: 4.4rem;

  line-height: 1.5rem;

  background: #f762c9;

  

  line-height:4.4rem;

  text-align: center;

  font-size: 1.5rem;
 
}
</style>
