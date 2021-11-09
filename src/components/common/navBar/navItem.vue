<template>
  <div class="navitem" @click="toOther">
    <div class="nav_image" v-if="isActive">
      <slot name="nav_image"></slot>
    </div>
    <div class="image_active" v-else>
      <slot name="image_active"></slot>
    </div>
    <div class="nav_text" :class="{ active: isActive }">
      <slot name="nav_text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    path: String,
  },
  data() {
    return {
      isActive: true,
    };
  },
  methods: {
    // 跳转页面
    toOther() {
      this.$router.replace(this.path);
    },
  },
};
</script>
<style lang='scss' scoped>
.navitem:hover {
  .nav_image,
  .image_active,
  .nav_text {
    color: red !important;
  }
}
.navitem {
  flex: 1;
  text-align: center;
  .nav_image {
    font-size: 20px;
  }
  .image_active {
    color: red;
  }
  .nav_text {
    font-size: 16px;
  }
}
</style>
