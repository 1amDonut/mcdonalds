<template>
  <div class="header">
    <!-- 頂部 -->
    <div class="top-wrapper">
      <div class="back-wrapper">
        <span class="icon-arrow_lift"></span>
      </div>
      <div class="search-wrapper">
        <span class="search-icon"></span>
        <input class="search-bar" type="input" placeholder="搜索店內商品"/>
      </div>
      <div class="more-wrapper">
        <a class="spelling-bt" href="#">拼單</a>
        <div class="more-bt"></div>
      </div>
    </div>

    <!-- 主題內容 -->
    <div class="content-wrapper"></div>

    <!-- 公告內容 -->
    <div class="bulletin-wrapper"></div>
  </div>
</template>

<script>
  export default {
    name: 'Heaher',
    props:{
      poiInfo:{
        type: Object,
        default:{}
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  /* 導入字體圖標 */
  @import url('../../common/styles/style.css');
  @import url('Header.css');
</style>
