<template>
  <!-- Navigation sidebar -->
  <div class="flex flex-col flex-grow p-4 overflow-auto">
    <a
      v-for="device in devices"
      :key="device.device_id"
      ref="deviceLinks"
      :class="[
        'devices',
        'flex',
        'items-center',
        'flex-shrink-0',
        'h-10',
        'px-2',
        'text-sm',
        'font-medium',
        'rounded',
        'cursor-pointer',
        {
          'hover:bg-gray-800': sharedData.device_id !== device.device_id,
          'bg-gray-800': sharedData.device_id === device.device_id
        }
      ]"
      @click="updateCurrentDevice(device.device_id)"
    >
      <span class="leading-none">{{ device.device_id }}</span>
    </a>
    <a
      class="flex items-center flex-shrink-0 h-10 px-3 mt-auto text-sm font-medium bg-gray-800 rounded hover:bg-gray-700"
      href="#"
    >
      <svg
        class="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
      <span class="ml-2 leading-none">New Item</span>
    </a>
  </div>
</template>

<script>
import axios from 'axios'
import { inject, onMounted, ref, watch } from 'vue'

export default {
  setup() {
    const sharedData = inject('sharedData')
    const devices = ref([])
    const deviceLinks = ref(null)

    const fetchDevices = () => {
      // Make an API call to fetch the devices
      axios
        .get(`http://34.101.86.121:9000/device/${sharedData.pond_id}`)
        .then((response) => {
          devices.value = response.data
          applyActiveDeviceStyle()
        })
        .catch((error) => {
          console.error(error)
        })
    }

    const updateCurrentDevice = (deviceID) => {
      sharedData.device_id = deviceID
      localStorage.setItem('device_id', deviceID)
    }

    const applyActiveDeviceStyle = () => {
      if (deviceLinks.value) {
        const links = deviceLinks.value.querySelectorAll('.devices')
        links.forEach((link) => {
          const deviceID = link.querySelector('span').textContent
          link.classList.toggle('bg-gray-800', deviceID === sharedData.device_id)
        })
      }
    }

    onMounted(() => {
      const storedPondID = localStorage.getItem('pond_id')
      if (storedPondID) {
        sharedData.pond_id = storedPondID
      }
      const storedDeviceID = localStorage.getItem('device_id')
      if (storedDeviceID) {
        sharedData.device_id = storedDeviceID
      }
      fetchDevices()
    })

    watch(
      () => sharedData.pond_id,
      () => {
        fetchDevices()
      }
    )

    return {
      devices,
      sharedData,
      fetchDevices,
      updateCurrentDevice,
      deviceLinks
    }
  }
}
</script>

<style scoped></style>
