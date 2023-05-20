<template>
  <div class="container">
    <div class="text">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  width: 100%;
  background-color: #fafafa;
}
.text {
  max-width: 700px;
  text-align: center;
  color: #181818;
  font-size: 1rem;
}
</style>
