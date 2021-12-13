<template>
  <div id="app">
    <el-row tag="div" type="flex" justify="start" align="middle" class="content">
      <el-col span="12" style="background: red;">111</el-col>
      <el-col span="6" style="background: green;">222</el-col>
      <el-col span="6" style="background: gray;">333</el-col>
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
