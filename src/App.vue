<script setup>
import MainHeader from './components/MainHeader.vue'
</script>

<template>
  <MainHeader></MainHeader>
  <div class="navigation">
    <router-link to="/">Go to Intro</router-link>
    <router-link to="/problem">Go to Problem</router-link>
  </div>

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
