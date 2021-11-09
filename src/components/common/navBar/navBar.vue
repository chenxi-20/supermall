<template>
  <div class="navbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>
<style lang='scss' scoped>
.navbar {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  background: #e2e2e2;
  z-index: 999;
  box-shadow: 3px 3px 3px #e2e2e2;
}
</style>
