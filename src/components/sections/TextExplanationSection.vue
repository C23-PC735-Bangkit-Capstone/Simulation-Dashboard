<template>
  <div class="container">
    <div class="text">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  width: 100%;
  background-color: #fafafa;
  // border: 1px solid red;
}
.text {
  text-align: center;
  color: var(--vt-c-text-light-1);
  font-size: 1rem;
}
</style>
