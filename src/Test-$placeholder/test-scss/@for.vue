<template>
  <div>
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>5</p>
    <p>6</p>
    <p>7</p>
    <p>8</p>
    <p>9</p>
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