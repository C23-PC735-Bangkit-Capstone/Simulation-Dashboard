<template>
  <div class="button">
    <router-link :to="route">
<<<<<<< HEAD
<<<<<<< HEAD
      <button><slot name="content"></slot></button>
=======
      <button>{{ text }}</button>
>>>>>>> 64b84e9 (init)
=======
      <button><slot name="content"></slot></button>
>>>>>>> 03d63c3 (Tidying components)
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    route: {
      type: String,
      required: true
<<<<<<< HEAD
<<<<<<< HEAD
=======
    },
    text: {
      type: String,
      required: true
>>>>>>> 64b84e9 (init)
=======
>>>>>>> 03d63c3 (Tidying components)
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  margin-top: 20px;
  button {
    cursor: pointer;
    min-width: 300px;
    min-height: 60px;
    outline: none;
    border: none;
    border-radius: 5px;
    color: var(--vt-c-text-dark-1);
    font-weight: 400;
    font-family: Roboto;
    font-size: 1rem;
    background-color: hsl(160, 98%, 19%);

    &:hover {
      background-color: hsl(160, 98%, 20%);
    }
    &:active {
      transform: scale(0.99);
      border: 0.5px solid rgba(17, 17, 17, 70%);
      box-shadow: inset 1px 1px 1px rgb(17, 17, 17, 50%);
    }
  }
}
</style>
