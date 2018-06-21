<template>
  <div class="footer">
    <router-link to="/index">
      <footerItem>
        <span slot='img' class='home-page'></span>
        <span slot='item'>首页</span>
      </footerItem>
    </router-link>
    <router-link to="/second">
      <footerItem>
        <span slot='img' class='music'></span>
        <span slot='item'>音乐</span>
      </footerItem>
    </router-link>
    <router-link to="/second">
      <footerItem>
        <span slot='img' class='movies'></span>
        <span slot='item'>影视</span>
      </footerItem>
    </router-link>
    <router-link to="/login">
      <footerItem>
        <span slot='img' class='set'></span>
        <span slot='item'>设置</span>
      </footerItem>
    </router-link>
  </div>
</template>
<script>
import footerItem from './footer-item'
export default {
  data() {
    return {

    }
  },
  components: {
    footerItem
  }
}
</script>
<style lang="stylus">
  .footer-item
    span:nth-child(1)
      display block
      margin 6px auto 1px
      width 35px
      height 35px
      border 1px solid #666
      border-radius 5px
    span:nth-child(2)
      font-size 14px
      color #666
      margin-bottom 3px
    .home-page
      background url(../assets/footer.jpg) no-repeat -13px -13px
      background-size 280px 150px
    .music
      background url(../assets/footer.jpg) no-repeat -56px -13px
      background-size 280px 150px
    .movies
      background url(../assets/footer.jpg) no-repeat -99px -13px
      background-size 280px 150px
    .set
      background url(../assets/footer.jpg) no-repeat -144px -13px
      background-size 280px 150px
</style>
