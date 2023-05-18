<script setup>
import MainHeader from './components/MainHeader.vue'
</script>

<template>
  <MainHeader></MainHeader>

  <router-view></router-view>
</template>

<style>
.navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
}
</style>
