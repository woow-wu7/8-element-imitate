<template>
  <div style="border: 2px solid black; padding: 10px; margin: 10px 0">
    <p>sup</p>
    <!-- <button>10</button><sup style="background: green; borderRadius: 100px;">10</sup> -->
    <span class="father">
      <button>按钮</button>
      <sup class="child">10</sup>
    </span>
  </div>
</template>

<script>
export default {
  name: 'test-sup-component'
};
</script>

<style>
.father {
  background: red;
  position: relative;
  display: inline-block;
}
.child {
  display: inline-block;
  height: 18px;
  line-height: 18px;
  text-align: center;

  padding: 0 2px;
  background: yellow;
  font-size: 12px;
  white-space: nowrap;
  border: 1px solid black;
  border-radius: 100px;

  position: absolute;
  top: 0;
  right: calc(18px / 2);
  transform: translateY(-50%) translateX(100%);
}
</style>