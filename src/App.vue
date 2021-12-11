<template>
  <div id="app">
    <p>{{ name }}</p>
    <div class="content">'content'</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "app",
    };
  },
};
</script>

<style scoped lang="scss">
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .content {
    padding: $safe-padding; // 使用全局scss样式
    border: $border-1px;
  }
}
</style>
