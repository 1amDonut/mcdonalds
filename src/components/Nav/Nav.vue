<template>
  <div class="nav">
    <router-link to="/goods" class="nav-item">點菜</router-link>
    <router-link to="/ratings" class="nav-item">評論</router-link>
    <router-link to="/seller" class="nav-item">商家</router-link>
  </div>
</template>

<script></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.nav {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
}

.nav .nav-item {
  flex: 1;
  text-align: center;
  font-size: 13px;
  text-decoration: none;
  color: #666666;
}

/* 選中後樣式 */
.nav .active {
  color: #ffbb22;
}
</style>
