<template>
  <!-- Configure Datasets -->
  <div class="h-24 col-span-2 bg-gray-700 h-auto">
    <div class="p-6">
      <div class="flex flex-row">
        <h1 class="text-xl font-bold mb-4">Device Simulation</h1>
      </div>
      <div class="flex flex-row gap-4">
        <div class="flex flex-col flex-1">
          <label class="block mb-2" for="deviceId">Device ID:</label>
          <select
            v-model="deviceId"
            class="w-full px-4 py-2 border rounded"
            id="deviceId"
            name="deviceId"
            required
          >
            <option value="D1" selected>Device 1</option>
            <option value="D2">Device 2</option>
            <option value="D3">Device 3</option>
          </select>
        </div>
        <div class="flex flex-col flex-1">
          <label class="block mb-2" for="interval">Timestamp interval (seconds):</label>
          <input
            v-model="interval"
            class="w-full px-4 py-2 border rounded"
            type="number"
            id="interval"
            name="interval"
            required
          />
        </div>
      </div>
      <div class="flex flex-row">
        <div class="flex flex-col flex-1 mt-6">
          <input
            class="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
            type="submit"
            value="Generate"
            @click="printLogDataset"
          />
          <div v-if="log" class="mt-4">
            <h2 class="text-lg font-bold mb-2">Log:</h2>
            <pre>{{ log }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      log: '',
      deviceId: 'D1',
      interval: 1,
      dataset: []
    }
  },
  methods: {
    initiateDataset() {
      const dataset = localStorage.getItem('dataset')
      if (!dataset) {
        console.log('No dataset uploaded.')
        return
      }

      const rows = dataset.split('\r')
      this.dataset = rows.slice(0, -1).map((row, index) => {
        if (index === 0) {
          return row // Keep the first row unchanged
        }
        return row.slice(1) // Remove the first letter from row 2 onward
      })
    },
    printLogDataset() {
      this.initiateDataset()
      this.log = '' // Clear the log before generating new datapoints

      const interval = parseInt(this.interval) * 1000 // Convert interval to milliseconds
      let currentIndex = 0

      const printRow = () => {
        if (currentIndex >= this.dataset.length) {
          clearInterval(printInterval)
          return
        }

        const row = this.dataset[currentIndex]
        const [timestamp, AccX, AccY, AccZ] = row.split(',')
        this.log += `${currentIndex}: timestamp=${timestamp}, Device ID: ${this.deviceId}, AccX=${AccX}, AccY=${AccY}, AccZ=${AccZ}\n`

        currentIndex++
      }

      printRow() // Print the first row immediately

      const printInterval = setInterval(printRow, interval)
    }
  }
}
</script>

<style scoped></style>
