<template>
  <div style="border: 2px solid black; padding: 10px">
    <div>test-@for</div>
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>5</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@for $i from 1 through 4 {
  // 包含第4个，to不包含4个
  p:nth-child(#{$i}) {
    background: red;
  }
}
</style>