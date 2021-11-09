<template>
  <div class="layout">
    <router-view></router-view>
    <VFooter></VFooter>
  </div>
</template>

<script>
import VFooter from "components/content/footer/Footer";
export default {
  data() {
    return {};
  },
  components: {
    VFooter,
  },
};
</script>
<style lang='scss' scoped>
</style>
