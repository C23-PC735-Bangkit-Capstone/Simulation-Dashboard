<template>
  <!-- Page Header -->
  <div class="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-800">
    <h1 class="text-lg font-medium">{{ this.user_id }} {{ this.user_infos }}</h1>
    <button
      class="flex items-center justify-center h-10 px-4 ml-auto text-sm font-medium rounded hover:bg-gray-800"
    >
      Monitor: OFF
    </button>
    <button
      class="flex items-center justify-center h-10 px-4 ml-2 text-sm font-medium bg-gray-800 rounded hover:bg-gray-700"
    >
      Sensor: ON
    </button>
    <button class="relative ml-2 text-sm focus:outline-none group">
      <div class="flex items-center justify-between w-10 h-10 rounded hover:bg-gray-800">
        <svg
          class="w-5 h-5 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </div>
      <div
        class="absolute right-0 flex-col items-start hidden w-40 mt-1 pb-1 bg-gray-800 border border-gray-800 shadow-lg group-focus:flex"
      >
        <a
          v-for="user in users"
          :key="user.user_id"
          class="w-full px-4 py-2 text-left hover:bg-gray-900"
          @click="updateCurrentUser(user.user_id, user.user_infos)"
        >
          User: {{ user.user_id }}
        </a>
      </div>
    </button>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      users: [],
      user_id: '',
      user_infos: ''
    }
  },
  mounted() {
    const storedUserID = localStorage.getItem('user_id')
    if (storedUserID) {
      this.user_id = storedUserID
    }
    const storedUserInfos = localStorage.getItem('user_infos')
    if (storedUserInfos) {
      this.user_infos = storedUserInfos // Fixed variable name
    }
    this.fetchUsers()
  },
  methods: {
    fetchUsers() {
      axios
        .get('http://34.101.84.62:8000/users') // Replaced backticks with single quotes
        .then((response) => {
          this.users = response.data
        })
        .catch((error) => {
          console.error(error)
        })
    },
    updateCurrentUser(userID, userInfos) {
      this.user_id = userID
      this.user_infos = userInfos
      localStorage.setItem('user_id', userID)
      localStorage.setItem('user_infos', userInfos)
    }
  }
}
</script>
<style scoped></style>
