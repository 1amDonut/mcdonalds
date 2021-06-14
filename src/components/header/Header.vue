<template>
  <div class="header">
    <!-- 頂部 -->
    <div class="top-wrapper">
      <div class="back-wrapper">
        <span class="icon-arrow_lift"></span>
      </div>
      <div class="search-wrapper">
        <span class="search-icon"></span>
        <input class="search-bar" type="input" placeholder="搜索店內商品" />
      </div>
      <div class="more-wrapper">
        <a class="spelling-bt" href="#">拼單</a>
        <div class="more-bt">
          <i class="s-radius"></i>
          <i class="s-radius"></i>
          <i class="s-radius"></i>
        </div>
      </div>
    </div>

    <!-- 主題內容 -->
    <div class="content-wrapper">
      <div class="icon" :style="head_bg"></div>
      <div class="name">
        <h3>{{ poiInfo.name }}</h3>
      </div>
      <div class="collect">
        <img src="../../../resource/img/star.png" />
        <span>收藏</span>
      </div>
    </div>

    <!-- 公告內容 -->
    <div class="bulletin-wrapper">
      <img
        class="icon"
        v-if="poiInfo.discounts2"
        :src="poiInfo.discounts2[0].icon_url"
      />

      <span class="text" v-if="poiInfo.discounts2">{{
        poiInfo.discounts2[0].info
      }}</span>

      <div class="detail" v-if="poiInfo.discounts2" @click="isShow = true">
        {{ poiInfo.discounts2.length }}個活動
        <span class="icon-keyboard_arrow_right"></span>
      </div>
    </div>

    <!-- 背景 -->
    <div class="bg-wrapper" :style="content_bg">
      <!-- <img :src="poiInfo.head_pic_url"/> -->
    </div>

    <!-- 公告詳情 -->
    <div class="bulletin-detail" v-show="isShow">
      <div class="detail-wrapper">
        <div class="main-wrapper" :style="detail_bg">
          <div class="icon" :style="head_bg"></div>
          <h3 class="name">{{ poiInfo.name }}</h3>
          <!-- 評價 -->
          <p class="tip">
            {{ poiInfo.min_price_tip }}<i>|</i> {{ poiInfo.shipping_fee_tip
            }}<i>|</i>
            {{ poiInfo.delevery_time_tip }}
          </p>
          <p class="time">
            配送時間：
            {{ poiInfo.shipping_time }}
          </p>
          <div class="discounts" v-if="poiInfo.discounts2">
            <p>
              <img :src="poiInfo.discounts2[0].icon_url"/>
              <span>{{poiInfo.discounts2[0].info}}</span>
            </p>
          </div>
        </div>

        <div class="close-wrapper">
          <span class="icon-close" @click="isShow = false"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Heaher",
  data(){
    return{
      isShow:false
    }
  },
  props: {
    poiInfo: {
      type: Object,
      default: {}
    }
  },
  computed: {
    content_bg() {
      return "background-image:url(" + this.poiInfo.head_pic_url + ");";
    },
    head_bg() {
      return "background-image:url(" + this.poiInfo.pic_url + ");";
    },
    detail_bg(){
      return "background-image:url(" + this.poiInfo.poi_back_pic_url + ");";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* 導入字體圖標 */
@import url("../../common/styles/style.css");
@import url("Header.css");
</style>
