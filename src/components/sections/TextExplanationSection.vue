<template>
  <div class="container">
    <div class="text">
<<<<<<< HEAD
      <slot name="content"></slot>
=======
      {{ text }}
>>>>>>> 64b84e9 (init)
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
export default {}
=======
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
>>>>>>> 64b84e9 (init)
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  width: 100%;
  background-color: #fafafa;
<<<<<<< HEAD
}
.text {
  max-width: 700px;
=======
  // border: 1px solid red;
}
.text {
>>>>>>> 64b84e9 (init)
  text-align: center;
  color: var(--vt-c-text-light-1);
  font-size: 1rem;
}
</style>
