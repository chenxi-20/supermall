<template>
  <div class="top_bar">
    <div class="left">
      <slot name="left" ></slot>
    </div>
    <div class="center">
      <slot name="center" ></slot>
    </div>
    <div class="right">
      <slot name="right" ></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
}

</script>
<style lang='scss' scoped>
.top_bar {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px 1px rgba(100,100,100,0.1);
  .left, .right{
    height: 100%;
    width: 60px;
  }
  .center {
    flex: 1;
    height: 100%;
  }
}
</style>
