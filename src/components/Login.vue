<template>
  <div class="login" v-if="!isLogin">
    <input type="text" placeholder="用户名" v-model="uname" maxlength="18" />
    <input type="password" placeholder="密码" v-model="upwd" maxlength="18" />
    <button @click="checkData">登&nbsp;&nbsp;录</button>
  </div>
  <!--小结：v-if/v-else是无法实现state更新的自动匹配，需要界面刷新，才能重新生效-->
  <div class="myzone" v-else>
    <section class="user-info">
      <div class="user-img">
        <img src="../../static/slider-pic/slider-pic1.jpeg"/>
      </div>
      <div class="user-describe">
        <p>Mortimers</p>
        <p>惠州</p>
      </div>
    </section>
  </div>
</template>
<script>
import {mapstate} from 'vuex'
export default {
  data() {
    return {
      uname: '',
      upwd: ''
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  methods: {
    //登录检查
    checkData() {
      if(this.uname === '' || this.upwd === '') {
        alert('用户名或密码不能为空')
      }else if(this.uname === 'asdf' && this.upwd === '1234') {
        alert('登录成功');
        this.$store.commit('SET_LOGIN',true)
      }else {
        alert('用户名或密码错误');
      }
    }
  }
}
</script>
<style lang="stylus">
.login
  text-align center
  margin-top 60px
  padding-top 10px
  input
    dispaly block
    width 70%
    height 45px
    outline none
    font-size 16px
    box-sizing border-box
    border 1px solid #cccccc
    border-radius 10px
    margin-top 25px
    padding 0 10px
  button
    display block
    width 70%
    height 45px
    font-size 16px
    border-radius 10px
    margin 25px auto 0
    outline none
    border 1px solid #ccc
.myzone
  .user-info
    display flex
    padding 17px 16px
    border-bottom 1px solid #e0e0e0
    background-image -webkit-linear-gradient(top,#388EFF,#409FFD)
    .user-img img
      width 50px
      border-radius 50%
      border 2px solid #fff
    .user-describe
      margin 5px 0 0 20px

</style>
