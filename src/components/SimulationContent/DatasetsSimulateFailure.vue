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
            @click="handleFileUpload"
          >
            Simulate Failure Data
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
const failureData = [
  { Timestamp: '2141864', AccX: '36', AccY: '-56', AccZ: '174' },
  { Timestamp: '2143688', AccX: '-64', AccY: '-68', AccZ: '168' },
  { Timestamp: '2145492', AccX: '-21', AccY: '-66', AccZ: '145' },
  { Timestamp: '2147308', AccX: '-12', AccY: '92', AccZ: '124' },
  { Timestamp: '2149108', AccX: '20', AccY: '-16', AccZ: '149' },
  { Timestamp: '2150912', AccX: '-19', AccY: '33', AccZ: '145' },
  { Timestamp: '2152732', AccX: '-94', AccY: '-22', AccZ: '180' },
  { Timestamp: '2154568', AccX: '-14', AccY: '-64', AccZ: '181' },
  { Timestamp: '2156384', AccX: '-63', AccY: '39', AccZ: '187' },
  { Timestamp: '2158196', AccX: '45', AccY: '29', AccZ: '124' },
  { Timestamp: '2160028', AccX: '28', AccY: '-14', AccZ: '177' },
  { Timestamp: '2161864', AccX: '27', AccY: '70', AccZ: '122' },
  { Timestamp: '2163668', AccX: '-64', AccY: '66', AccZ: '202' },
  { Timestamp: '2165480', AccX: '-30', AccY: '-48', AccZ: '122' },
  { Timestamp: '2167300', AccX: '13', AccY: '76', AccZ: '134' },
  { Timestamp: '2169120', AccX: '19', AccY: '58', AccZ: '131' },
  { Timestamp: '2170940', AccX: '27', AccY: '-44', AccZ: '179' },
  { Timestamp: '2172764', AccX: '-10', AccY: '-36', AccZ: '163' },
  { Timestamp: '2174600', AccX: '40', AccY: '-16', AccZ: '191' },
  { Timestamp: '2176428', AccX: '25', AccY: '-13', AccZ: '158' },
  { Timestamp: '2178252', AccX: '17', AccY: '-15', AccZ: '186' },
  { Timestamp: '2180080', AccX: '-19', AccY: '-59', AccZ: '157' },
  { Timestamp: '2181916', AccX: '17', AccY: '-30', AccZ: '176' },
  { Timestamp: '2183748', AccX: '18', AccY: '28', AccZ: '165' },
  { Timestamp: '2185576', AccX: '21', AccY: '-34', AccZ: '144' },
  { Timestamp: '2187416', AccX: '11', AccY: '-43', AccZ: '128' },
  { Timestamp: '2189228', AccX: '17', AccY: '67', AccZ: '138' },
  { Timestamp: '2191044', AccX: '-16', AccY: '-47', AccZ: '148' },
  { Timestamp: '2192864', AccX: '-17', AccY: '51', AccZ: '160' },
  { Timestamp: '2194688', AccX: '24', AccY: '-11', AccZ: '101' },
  { Timestamp: '2196520', AccX: '46', AccY: '-32', AccZ: '152' },
  { Timestamp: '2198328', AccX: '84', AccY: '38', AccZ: '134' },
  { Timestamp: '2200152', AccX: '-19', AccY: '-40', AccZ: '201' },
  { Timestamp: '2201992', AccX: '13', AccY: '-43', AccZ: '156' },
  { Timestamp: '2203840', AccX: '29', AccY: '-27', AccZ: '154' },
  { Timestamp: '2205668', AccX: '26', AccY: '11', AccZ: '166' },
  { Timestamp: '2207500', AccX: '14', AccY: '-37', AccZ: '216' },
  { Timestamp: '2209312', AccX: '12', AccY: '36', AccZ: '132' },
  { Timestamp: '2211088', AccX: '-92', AccY: '-4', AccZ: '164' },
  { Timestamp: '2212896', AccX: '-16', AccY: '57', AccZ: '101' },
  { Timestamp: '2214708', AccX: '18', AccY: '-15', AccZ: '180' },
  { Timestamp: '2216544', AccX: '-24', AccY: '-76', AccZ: '180' },
  { Timestamp: '2218396', AccX: '-26', AccY: '-21', AccZ: '182' },
  { Timestamp: '2220256', AccX: '-90', AccY: '-13', AccZ: '163' },
  { Timestamp: '2222092', AccX: '36', AccY: '-83', AccZ: '195' },
  { Timestamp: '2223912', AccX: '15', AccY: '-30', AccZ: '165' },
  { Timestamp: '2225736', AccX: '25', AccY: '54', AccZ: '176' },
  { Timestamp: '2227552', AccX: '-89', AccY: '-38', AccZ: '184' },
  { Timestamp: '2229388', AccX: '15', AccY: '-67', AccZ: '147' }
]

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
    handleFileUpload() {
      const data = failureData.map((obj) => ({ ...obj }))

      const topRows = failureData.slice(0, 3)

      this.dataset = {
        name: 'failureData',
        data: data
      }

      this.topRows = topRows

      localStorage.setItem('failureDataset', JSON.stringify(data))
    },
    uploadData() {
      const sendMessage = () => {
        const message = `Smart Vibration Monitoring App (${new Date().toLocaleString()})
---
Permisi, ada indikasi kematian kincir di tambak saya. Apakah ada yang bisa membantu?

https://goo.gl/maps/mMcsSVKZDydYwcbUA
`
        const data = new URLSearchParams()
        data.append('target', '628976075402-1516586131@g.us')
        data.append('message', message)
        data.append('countryCode', '62') // optional

        const options = {
          method: 'POST',
          body: data,
          headers: {
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

      const sendLocation = () => {
        const data = new URLSearchParams()
        data.append('target', '628976075402-1516586131@g.us')
        data.append('location', '-7.880415973854486, 109.98746640848763')

        const options = {
          method: 'POST',
          body: data,
          headers: {
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

      sendMessage()
        .then(() => sendLocation())
        .catch((error) => {
          console.error(error)
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
