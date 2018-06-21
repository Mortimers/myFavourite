<template>
  <!--首页-->
  <div class="index">
    <!--轮播图-->
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item in listImg" :key="item.id">
        <img class="swiper-image" :src="item.url" alt="swiper-image" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
    <!--前20电影列表-->
    <favMovie v-for="(item,index) in moviesData" :key="index" :itemCild="item"></favMovie>
    <!--撑开底部导航的空间-->
    <div class="space"></div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import favMovie from './fav-movie.vue'
export default {
  data() {
    return {
      moviesData: this.$store.state.movielist,
      listImg: [
        {url: '../static/img/1.jpg'},
        {url: '../static/img/2.jpg'},
        {url: '../static/img/3.jpg'},
        {url: '../static/img/4.jpg'},
        {url: '../static/img/5.jpg'},
        {url: '../static/img/6.jpg'}
      ],
      swiperOption: {
        // 所有配置均为可选（同Swiper配置）
        notNextTick: true,
        autoplay: true,
        loop: true,
        grabCursor : true,
        setWrapperSize :true,
        autoHeight: true,
        pagination : '.swiper-pagination',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar:'.swiper-scrollbar',
        mousewheelControl : true,
        observeParents:true,
        onTransitionStart(swiper){
          console.log(swiper)
        }
      }
    }
  },
  created() {
      /**
     //let url = this.HOST + '/movie/top250';
     this.$store.dispatch('setLoading', true);
     this.$axios.get('/api')
     .then(res => {
        console.log(res.data.data)
        //this.moviesData = res.data.data.slice(0,19);
        //this.$store.dispatch('getMusicList', res.data.data[20] || []);
        this.$store.dispatch('setLoading', false);
     })
     .catch(err => {
        console.log(err)
     })
     */
  },
  components: {
     swiper,
     swiperSlide,
     favMovie
  },
  computed: {
    mySwiper() {
      return this.$refs.mySwiper;
    }
  },
  methods: {
    stopPlay() {
      this.mySwiper.stopAutoplay();
    },
    play() {
      this.mySwiper.startAutoplay();
    }
  }
}
</script>
<style lang="stylus">
.index
  .space
    width 100%
    height 70px
  .swiper-button-prev
    width 30px
    height 30px
    background url(../../static/img/swiper_button.png) no-repeat 0 0
  .swiper-button-next
    width 30px
    height 30px
    background url(../../static/img/swiper_button.png) no-repeat -42px 0
  .swiper-slide img
    width 100%
    height 200px
</style>
