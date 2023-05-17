<script setup>
import Button from '../CTAButton.vue'
</script>

<template>
  <div class="container">
    <div class="text">
<<<<<<< HEAD
      <slot name="text"></slot>
    </div>
    <Button route="/problem">
      <template v-slot:content>{{ action }}</template>
    </Button>
=======
      {{ text }}
    </div>
    <Button text="Ya, saya bersedia" route="/problem"></Button>
>>>>>>> 64b84e9 (init)
  </div>
</template>

<script>
export default {
  props: {
<<<<<<< HEAD
    action: {
=======
    text: {
>>>>>>> 64b84e9 (init)
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
<<<<<<< HEAD
  padding: 75px 20px;
=======
>>>>>>> 64b84e9 (init)
  // border: 1px solid red;
}
.text {
  text-align: center;
  color: var(--vt-c-text-dark-1);
  font-size: 1rem;
}
</style>
