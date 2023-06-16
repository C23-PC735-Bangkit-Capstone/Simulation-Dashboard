<template>
  <!-- Dropdown sidebar -->
  <button class="relative text-sm focus:outline-none group">
    <div
      class="flex items-center justify-between w-full h-16 px-4 border-b border-gray-800 hover:bg-gray-800"
    >
      <span class="font-medium">Current Pond: {{ sharedData.pond_id }}</span>
      <svg
        class="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <div
      class="absolute z-10 flex-col items-start hidden w-full pb-1 bg-gray-800 shadow-lg group-focus:flex"
    >
      <a
        v-for="pond in ponds"
        :key="pond.pond_id"
        class="w-full px-4 py-2 text-left hover:bg-gray-900"
        @click="updateCurrentPond(pond.pond_id)"
      >
        Pond: {{ pond.pond_id }}
      </a>
    </div>
  </button>
</template>

<script>
import axios from 'axios'
import { ref, onMounted, inject, watch } from 'vue'

export default {
  setup() {
    const sharedData = inject('sharedData')
    const ponds = ref([])
    const user_id = ref('')

    const fetchPonds = () => {
      axios
        .get(`http://34.101.86.121:9000/ponds/${user_id.value}`)
        .then((response) => {
          ponds.value = response.data
        })
        .catch((error) => {
          console.error(error)
        })
    }

    const updateCurrentPond = (pondID) => {
      sharedData.pond_id = pondID
      localStorage.setItem('pond_id', pondID)
    }

    onMounted(() => {
      const storedUserID = localStorage.getItem('user_id')
      if (storedUserID) {
        user_id.value = storedUserID
      }
      const storedPondID = localStorage.getItem('pond_id')
      if (storedPondID) {
        sharedData.pond_id = storedPondID
      }
      fetchPonds()
    })

    watch(user_id, () => {
      fetchPonds()
    })

    return {
      sharedData,
      ponds,
      user_id,
      fetchPonds,
      updateCurrentPond
    }
  }
}
</script>

<style scoped></style>
