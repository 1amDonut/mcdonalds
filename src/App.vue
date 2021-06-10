<template>
  <div id="app">
    <!-- 頭部 -->
    <Myheader></Myheader>
    <!-- 導航 -->
    <Mynav></Mynav>
    <!-- 主體內容 -->
    <div class="content"></div>
    <router-view/>
  </div>
</template>

<script>
import Myheader from './components/header/Header.vue'
import Mynav from './components/Nav/Nav.vue'
export default {
  name: 'App',
  components: {
    Myheader, Mynav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
