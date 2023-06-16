<template>
  <!-- Data Table -->
  <div class="h-24 col-span-3 bg-gray-700 h-auto">
    <div class="p-6 flex flex-row">
      <div class="w-full flex flex-col flex-grow">
        <h1 class="text-xl font-bold mb-4">Simulate Data Uploads</h1>
        <div class="button-container">
          <input
            type="file"
            ref="fileInput"
            accept=".csv"
            class="hidden"
            @change="handleFileUpload"
          />
          <button
            id="upload-button"
            class="rounded-md py-2 px-4 text-white bg-blue-500 hover:bg-blue-700"
            @click="chooseFile"
          >
            Choose File (CSV)
          </button>
          <button
            id="upload-data-button"
            class="rounded-md py-2 px-4 text-white bg-green-500 hover:bg-green-700"
            @click="uploadData"
            :disabled="!dataset"
          >
            Upload Data
          </button>
        </div>
        <div v-if="dataset !== null" class="mt-4">
          <h2 class="font-bold mb-2">File Uploaded:</h2>
          <p class="dataset-name mb-2">{{ dataset.name }}</p>
          <div class="dataset-overflow">
            <table class="dataset-table">
              <tr v-for="(row, index) in topRows" :key="index">
                <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
              </tr>
            </table>
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
      dataset: null,
      interval: 1,
      printInterval: 1,
      topRows: []
    }
  },
  methods: {
    chooseFile() {
      this.$refs.fileInput.click()
    },
    handleFileUpload(event) {
      const file = event.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = () => {
          const contents = reader.result
          const rows = contents.split('\n')
          const header = rows[0].replace(/\r/g, '').split(',')
          const data = rows.slice(1, -1).map((row) => {
            const values = row.replace(/\r/g, '').split(',')
            return Object.fromEntries(header.map((key, index) => [key, values[index]]))
          })
          const topRows = rows.slice(0, 3).map((row) => row.replace(/\r/g, '').split(','))

          this.dataset = {
            name: file.name,
            data: data
          }
          this.topRows = topRows

          localStorage.setItem('dataset', JSON.stringify(data))
        }
        reader.readAsText(file)
      }
    },
    uploadData() {
      const device_id = localStorage.getItem('device_id')
      if (!device_id) {
        console.error('Device ID not found in local storage.')
        return
      }

      const requestData = {
        device_id: parseInt(device_id),
        data: this.dataset.data
      }

      if (!requestData || requestData.data.length === 0) {
        console.error('No data to upload.')
        return
      }

      console.log(requestData.data)
      console.log(requestData)

      fetch(`http://34.101.86.121:9000/vibrations`, {
        method: 'POST',
        body: JSON.stringify(requestData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(async (response) => {
          if (response.ok) {
            console.log('Data uploaded successfully.')
          } else {
            const errorData = await response.json()
            console.error('Failed to upload data:', errorData)
          }
        })
        .catch((error) => {
          console.error('An error occurred during data upload:', error)
        })
    }
  }
}
</script>

<style scoped lang="scss">
.button-container {
  display: flex;
  width: 100%;
  gap: 1rem;

  button {
    flex: 1;
  }

  button[disabled] {
    background-color: #ccc;
    color: #707070;
    cursor: not-allowed;
  }
}

.dataset-name {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.dataset-overflow {
  overflow-x: auto;
  overflow-y: hidden;
}

.dataset-table {
  width: 100%;
  background-color: #ebf8ff0b;
  border: 1px solid #a5b4c5;
  text-align: left;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;

  td {
    border: 1px solid #e5e7eb;
    padding: 4px 8px;
  }
}
</style>
