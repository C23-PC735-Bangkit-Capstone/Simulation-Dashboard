<template>
  <div class="container">
    <div class="text">
<<<<<<< HEAD
<<<<<<< HEAD
      <slot name="content"></slot>
=======
      {{ text }}
>>>>>>> 64b84e9 (init)
=======
      <slot name="content"></slot>
>>>>>>> 03d63c3 (Tidying components)
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
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
=======
export default {}
>>>>>>> 03d63c3 (Tidying components)
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
<<<<<<< HEAD
}
.text {
  max-width: 700px;
=======
  // border: 1px solid red;
}
.text {
>>>>>>> 64b84e9 (init)
=======
}
.text {
  max-width: 700px;
>>>>>>> 03d63c3 (Tidying components)
  text-align: center;
  color: var(--vt-c-text-light-1);
  font-size: 1rem;
}
</style>
