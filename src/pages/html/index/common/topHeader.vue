<template>
  <div class="top-title">
    登录
    <div class="bottomLine"></div>
  </div>
</template>

<script>
export default {
  name: 'top-title',
  props:['title'],
  data() {
    return {
    }
  }
}
</script>

<style lang="less">
@import '../less/border.less';

.top-title {
  height: 44px;
  line-height: 44px;
  text-align: center;
  width: 7.5rem;
  background-color: #ef4f4f;
  font-size: 16px;
  // color: #fff;
  .bottomLine {
    position: relative;
    .borderBottomLine();
  }
}
</style>

