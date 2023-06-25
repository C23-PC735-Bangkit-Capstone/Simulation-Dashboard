<template>
  <!-- Data Table -->
  <div class="h-24 col-span-6 bg-gray-700 h-auto">
    <div class="p-6 h-auto">
      <table class="identity-table mb-2">
        <thead>
          <tr>
            <th>User ID</th>
            <th>User Infos</th>
            <th>Pond ID</th>
            <th>Device ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ sharedData.user_id }}</td>
            <td>{{ sharedData.user_infos }}</td>
            <td>{{ sharedData.pond_id }}</td>
            <td>{{ sharedData.device_id }}</td>
          </tr>
        </tbody>
      </table>
      <div class="data-table-parent">
        <table class="data-table">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Device ID</th>
              <th>AccX</th>
              <th>AccY</th>
              <th>AccZ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(entry, index) in chartData" :key="index">
              <td>{{ entry.timestamp }}</td>
              <td>{{ entry.device_id }}</td>
              <td>{{ entry.accx }}</td>
              <td>{{ entry.accy }}</td>
              <td>{{ entry.accz }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex flex-row mt-4">
        <button @click="fetchChartData" class="mr-4 px-4 py-2 bg-gray-800 rounded text-white">
          Refresh Data
        </button>
        <button @click="sendDataToML" class="px-4 py-2 bg-gray-800 rounded text-white">
          Send Data to ML
        </button>
      </div>
      <div class="mt-4">
        <h2 class="font-bold">Response Log:</h2>
        <p>{{ responseLog }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import { inject, onMounted, ref, watch } from 'vue'

export default {
  setup() {
    const sharedData = inject('sharedData')
    const chartData = ref([])
    const responseLog = ref('Loading response log...')

    watch(
      () => sharedData.user_id,
      (value) => {
        sharedData.user_id = value
      }
    )

    watch(
      () => sharedData.user_infos,
      (value) => {
        sharedData.user_infos = value
      }
    )

    watch(
      () => sharedData.device_id,
      (value) => {
        sharedData.device_id = value
      }
    )

    watch(
      () => sharedData.pond_id,
      (value) => {
        sharedData.pond_id = value
      }
    )

    const fetchChartData = () => {
      const deviceID = localStorage.getItem('device_id')
      if (!deviceID) {
        chartData.value = [] // Clear the chartData array
        return
      }

      axios
        .get(`http://34.101.84.62:8000/vibrations/${deviceID}`)
        .then((response) => {
          chartData.value = response.data
          const latestTimestamp =
            chartData.value.length > 0 ? moment().format('YYYY-MM-DD HH:mm:ss') : ''
          responseLog.value = `Latest successful fetch: ${latestTimestamp}`
        })
        .catch((error) => {
          console.error(error)
          chartData.value = []
          const latestTimestamp = moment().format('YYYY-MM-DD HH:mm:ss')
          responseLog.value = `An error occurred during data fetch: ${latestTimestamp}`
        })
    }

    const sendDataToML = () => {
      const sendMessage = async () => {
        const message = `Perhatian, saat ini kincir ${sharedData.pond_id} milikmu terindikasi rusak, segera perbaiki sebelum terlambat.`
        const data = {
          target: '628976075402',
          message: message
        }

        const options = {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'y5KS6W00S9FwI#@m58f_' // change TOKEN to your actual token
          }
        }

        return fetch('https://api.fonnte.com/send', options)
          .then((response) => response.text())
          .then((result) => {
            console.log(result)
          })
          .catch((error) => {
            console.error(error)
          })
      }
      sendMessage().catch((error) => {
        console.error(error)
      })
    }

    onMounted(() => {
      fetchChartData()
      setInterval(fetchChartData, 60000) // Fetch data every 60 seconds
    })

    return {
      sharedData,
      chartData,
      responseLog,
      fetchChartData,
      sendDataToML
    }
  }
}
</script>

<style scoped>
.data-table-parent {
  height: 450px;
  overflow-y: auto;
}
.data-table {
  height: 450px;
  width: 100%;
  background-color: #1f2937;
  color: white;
}

.data-table th,
.data-table td {
  padding: 8px;
}

.data-table th {
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid #4b5563;
}

.data-table tbody tr:nth-child(even) {
  background-color: #374151;
}

.data-table tbody tr:nth-child(odd) {
  background-color: #1f2937;
}

.identity-table {
  width: 100%;
  background-color: #1f2937;
  color: white;
}

.identity-table th,
.identity-table td {
  padding: 8px;
}

.identity-table th {
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid #4b5563;
}

.identity-table tbody tr {
  background-color: #374151;
}
</style>
