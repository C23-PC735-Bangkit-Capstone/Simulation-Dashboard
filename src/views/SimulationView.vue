<script setup>
import { provide, reactive } from 'vue'
import PageContent from '../components/PageContent.vue'
import PageHeader from '../components/PageHeader.vue'
import SidebarCore from '../components/SidebarCore.vue'
import SidebarDropdown from '../components/SidebarDropdown.vue'
import SidebarNavigation from '../components/SidebarNavigation.vue'

// Create a reactive object to hold the shared data
const sharedData = reactive({
  user_id: '',
  user_infos: '',
  device_id: '',
  pond_id: ''
})

// Provide the shared data to the child components
provide('sharedData', sharedData)

// Fetch initial data from local storage
const storedUserId = localStorage.getItem('user_id')
if (storedUserId) {
  sharedData.user_id = storedUserId
} else {
  // Set initial data if localStorage data doesn't exist
  sharedData.user_id = '10001'
  localStorage.setItem('user_id', sharedData.user_id)
}

const storedUserInfos = localStorage.getItem('user_infos')
if (storedUserInfos) {
  sharedData.user_infos = storedUserInfos
} else {
  sharedData.user_infos = 'Yahya Aqrom'
  localStorage.setItem('user_infos', sharedData.user_infos)
}

const storedDeviceId = localStorage.getItem('device_id')
if (storedDeviceId) {
  sharedData.device_id = storedDeviceId
} else {
  sharedData.device_id = '202306001'
  localStorage.setItem('device_id', sharedData.device_id)
}

const storedPondId = localStorage.getItem('pond_id')
if (storedPondId) {
  sharedData.pond_id = storedPondId
} else {
  sharedData.pond_id = '10001001'
  localStorage.setItem('pond_id', sharedData.pond_id)
}
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
