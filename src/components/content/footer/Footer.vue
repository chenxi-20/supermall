<template>
  <div class="footer">
    <NavBar>
      <NavItem path='/home'>
        <i class='el-icon-s-home' slot="nav_image"></i>
        <div slot="nav_text">首页</div>
      </NavItem>
      <NavItem  path='/category'>
        <i class='el-icon-menu' slot="nav_image"></i>
        <div slot="nav_text">分类</div>
      </NavItem>
      <NavItem path='/cart'>
        <i class='el-icon-shopping-cart-2' slot="nav_image"></i>
        <div slot="nav_text">购物车</div>
      </NavItem>
      <NavItem path='/profile'>
        <i class='el-icon-s-custom' slot="nav_image"></i>
        <div slot="nav_text">我的</div>
      </NavItem>
    </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/navBar';
import NavItem from 'components/common/navBar/navItem';

export default {
  name: 'VFooter',
  data () {
    return {
    };
  },
  components: {
    NavBar,
    NavItem
  }
}
</script>
<style lang='scss' scoped>
.footer {

}
</style>
