<template>
  <div style="border: 2px solid black; padding: 10px">
    <div>test-@for</div>
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@for $i from 1 through 4 {
  // 包含第4个，to不包含4个
  span:nth-child(#{$i}) {
    background: red;
  }
}
</style>