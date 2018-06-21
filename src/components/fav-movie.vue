<template>
  <router-link to="/login">
    <div class="fav-movie clear">
      <div class="img-title">
        <img :src="itemCild.images.small" alt="itemCild.alt" />
      </div>
      <div class="img-des">
        <h3>{{itemCild.title}}</h3>
        <p>
          <span>类型:</span>
          <span>{{itemCild.genres[0]}}/{{itemCild.genres[1]}}</span>
        </p>
        <p>
          <span>评分:</span>
          <span>{{itemCild.rating.average}}</span>
        </p>
        <p>
          <span>年份:</span>
          <span>{{itemCild.year}}</span>
        </p>
      </div>
    </div>
  </router-link>
</template>
<script>
  export default {
    props: ['itemCild']
  }
</script>
<style lang="stylus">
.fav-movie
  margin 4px 10px
  .img-title
    float left
    width 60px
    img
      width 100%
  .img-des
    float left
    width 70%
    height 100px
    margin-left 30px
</style>
