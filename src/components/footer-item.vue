<template>
  <div class="footer-item">
    <slot name="img"></slot>
    <slot name="item"></slot>
  </div>
</template>
<script>
export default {
  props: ['imgSrc']
}
</script>
<style lang="stylus">

</style>
