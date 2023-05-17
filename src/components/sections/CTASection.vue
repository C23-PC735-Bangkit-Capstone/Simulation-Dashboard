<script setup>
import Button from '../CTAButton.vue'
</script>

<template>
  <div class="container">
    <div class="text">
      {{ text }}
    </div>
    <Button text="Ya, saya bersedia" route="/problem"></Button>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  width: 100%;
  background-color: #1d3932;
  // border: 1px solid red;
}
.text {
  text-align: center;
  color: var(--vt-c-text-dark-1);
  font-size: 1rem;
}
</style>
