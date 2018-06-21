<template>
  <div id="app">
    <Headers></Headers>
    <router-view></router-view>
    <Footer></Footer>
    <div class="loading" v-if="isLoading">数据加载中...</div>
  </div>
</template>

<script>
import Index from './components/Index'
import Headers from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  data() {
    return {
      obj: {
        a:1
      }
    }
  },
  created() {
    console.log(this.obj)
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading
    }
  },
  components: {
    Index,
    Headers,
    Footer
  }
}
</script>

<style lang="stylus">
  @import './css/common.css'
  #app
    width 100%
    min-width 300px
    max-width 500px
    margin 0 auto
    .footer
      position fixed
      left 0
      bottom 0
      width 100%
      height 70px
      text-align center
      background-color #fff
      display flex
      display -webkit-flex
      flex-direction row
      border-top 1px solid #bbb
      a
        flex 1
        text-decoration none
    .loading
      width 140px
      height 40px
      text-align center
      line-height 40px
      background-color #eee
      position fixed
      top 50%
      left 35%
      border 1px solid #cccccc
      border-radius 8px
</style>
