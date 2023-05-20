<template>
  <div class="button">
    <router-link :to="route">
      <button><slot name="content"></slot></button>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    route: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  button {
    min-width: 300px;
    min-height: 60px;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 5px;
    color: #fafafa;
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
