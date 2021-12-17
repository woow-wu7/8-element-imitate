<template>
  <div id="app">
    <el-row
      tag="div"
      type="flex"
      justify="start"
      align="middle"
      class="content hidden-sm-and-down"
    >
      <!-- <el-col :span="12" style="background: red;">111</el-col>
      <el-col :span="4" :offset="6" :push="2" style="background: green;">222</el-col> -->
      <!-- <el-col :span="6" style="background: gray;">333</el-col> -->
      <el-col :sm="6" :md="12" style="background: red">1111</el-col>
      <el-col :sm="6" :md="6" style="background: blue">222</el-col>
      <el-col :sm="6" :md="3" style="background: grey">333</el-col>
      <el-col :sm="6" :md="3" style="background: green">444</el-col>
    </el-row>

    <dv-row>
      <dv-col>7777</dv-col>
    </dv-row>

    <!-- 以下是各种测试 -->
    <TestFor />
  </div>
</template>

<script>
import TestFor from "./Test-$placeholder/test-scss/@for.vue";
export default {
  name: "App",
  components: {
    TestFor: TestFor, // 测试 @for $i from x to/through xxx
  },
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
