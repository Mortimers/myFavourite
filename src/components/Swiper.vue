<template>
  <div class="swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>slide1</swiper-slide>
      <swiper-slide>slide2</swiper-slide>
      <swiper-slide>slide3</swiper-slide>
      <swiper-slide>slide4</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
  </div>
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        components: {
          swiper,
          swiperSlide
        },
        data() {
          return {
            swiperOption: {
                    // 所有配置均为可选（同Swiper配置）
                    notNextTick: true,
                    autoplay: 3000,
                    grabCursor : true,
                    setWrapperSize :true,
                    autoHeight: true,
                    pagination : '.swiper-pagination',
                    paginationClickable :true,
                    prevButton:'.swiper-button-prev',
                    nextButton:'.swiper-button-next',
                    scrollbar:'.swiper-scrollbar',
                    mousewheelControl : true,
                    observeParents:true,
                    onTransitionStart(swiper){
                      console.log(swiper)
                    }
            }
          }
        },
        computed: {
            swiper() {
              return this.$refs.mySwiperA.swiper
            }
        },
        mounted() {
            console.log("每次切换都会触发我");
            this.swiper.slideTo(3, 1000, false)
          }
        }
</script>
<style lang='stylus'>
</style>
