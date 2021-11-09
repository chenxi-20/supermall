<template>
  <div class="home">
    <top-bar class="home_bar">
      <div slot="center" class="home_top">购物车（0）</div>
    </top-bar>
  </div>
</template>

<script>
import TopBar from "components/common/topBar/topbar";
import {getHomeMultiData} from '@/network/home.js';
export default {
  name: "Home",
  components: {
    TopBar,
  },
  created() {
    getHomeMultiData().then( res => {
      console.log(res);
    })
  },
};
</script>

<style lang="scss" scoped>
.home {
  font-size: 18px;
  .home_bar {
    color: #fff;
    background: pink;
  }
}
</style>
