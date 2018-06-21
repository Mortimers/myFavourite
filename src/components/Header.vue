<template>
  <div class="head-content">
    <router-link to="/" title="是个图片">引导</router-link>
    <input type="text" placeholder='请输入要搜索的关键字' />
    <!--<span @click="logout">{{getLogin ? '退出' : '登录'}}</span>-->
    <span @click="logout">{{getLogin ? '退出' : '登录'}}</span>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        place: '苹果手机'
      }
    },
    computed: {
      getLogin() {
        if (!this.$store.state.isLogin) {
          return this.$store.state.isLogin = sessionStorage.getItem('isLogin'); //从sessionStorage中读取状态
         }
        return this.$store.state.isLogin
      }
    },
    methods: {
      logout() {

        //如果想退出，直接点击退出就可以进入
        if (this.$store.state.isLogin) {
          this.$store.commit('SET_LOGIN',false)
        }
        //跳转到登录、客户信息界面
        this.$router.replace({path: '/login'});
      }
    }
  }
</script>
<style lang="stylus">
  .head-content
    dispaly flex
    display -webkit-flex
    width 100%
    height 35px
    align-items center
    justify-content space-around
    background-image -webkit-linear-gradient(top,#3385FF,#388EFF)
    a:nth-of-type(1)
      flex 1
      font-size 16px
      color #ddd
      text-align center
      text-decoration none
    input
      flex 5
      font-size 15px
      height 25px
      border none
      outline none
      border-radius 10px
      padding-left 10px
    span
      flex 1
      font-size 16px
      color #ddd
      text-align center
      text-decoration none
</style>
