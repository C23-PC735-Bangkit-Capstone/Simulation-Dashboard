<script setup>
import PageContent from '../components/PageContent.vue'
import PageHeader from '../components/PageHeader.vue'
import SidebarCore from '../components/SidebarCore.vue'
import SidebarDropdown from '../components/SidebarDropdown.vue'
import SidebarNavigation from '../components/SidebarNavigation.vue'
</script>

<template>
  <div class="flex w-screen h-screen text-gray-400 bg-gray-900">
    <!-- Component Start -->
    <SidebarCore></SidebarCore>
    <!-- Sub sidebar -->
    <div class="flex flex-col w-56 border-r border-gray-800">
      <!-- Dropdown sidebar -->
      <SidebarDropdown></SidebarDropdown>
      <!-- Navigation sidebar -->
      <SidebarNavigation></SidebarNavigation>
    </div>
    <div class="flex flex-col flex-grow">
      <!-- Page Header -->
      <PageHeader></PageHeader>
      <!-- Page Content -->
      <PageContent></PageContent>
    </div>
    <!-- Component End  -->
  </div>
</template>

<script>
export default {}
</script>
