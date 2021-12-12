<template>
  <div id="app">
    <el-row tag="div" type="flex" justify="center" align="middle" class="content">
      <p>row</p>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped lang="scss">
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.content {
  width: 300px;
  height: 300px;
  background: yellow;
}
</style>
