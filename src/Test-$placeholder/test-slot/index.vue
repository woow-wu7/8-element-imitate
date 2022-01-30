<template>
  <div>
    <table border="1" cellSpacing="0" cellPadding="0">
      <caption>
        表格标题
      </caption>
      <colGroup width="100" span="2" style="background: yellow"></colGroup>
      <colGroup width="100" style="background: red"></colGroup>
      <thead>
        <tr>
          <th colspan="2">姓名</th>
          <th>年龄</th>
          <th>城市</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>woow_wu7</th>
          <td>woow_wu8</td>
          <td>重庆</td>
          <td>engineer</td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>

    <el-descriptions title="用户信息">
      <el-descriptions-item
        label="用户名"
        span="3"
        labelStyle="background: black;"
        contentStyle="background: blue;"
        >kooriookami</el-descriptions-item
      >
      <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
      <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
      <el-descriptions-item label="备注">
        <el-tag size="small">学校</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="联系地址"
        >江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item
      >
    </el-descriptions>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("this.$slots", this.$slots.default);
  },
};
</script>

<style>
</style>