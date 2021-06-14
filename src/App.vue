<template>
  <div id="app">
    <!-- 頭部 -->
    <Myheader :poiInfo="poiInfo"></Myheader>
    <!-- 導航 -->
    <Mynav></Mynav>
    <!-- 主體內容 -->
    <div class="content"></div>
    <router-view />
  </div>
</template>

<script>
import Myheader from "./components/header/Header.vue";
import Mynav from "./components/Nav/Nav.vue";
export default {
  name: "App",
  components: {
    Myheader,
    Mynav
  },
  data() {
    return {
      //
      poiInfo: {}
    };
  },
  created() {
    // 發起異步請求，獲取數據
    var that = this;
    this.$axios
      .get("/api/goods")
      .then(function(response) {
        // handle
        var dataSource = response.data;
        if (dataSource.code == 0) {
          that.poiInfo = dataSource.data.poi_info;
          console.log(dataSource.data.poi_info);
        }
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
