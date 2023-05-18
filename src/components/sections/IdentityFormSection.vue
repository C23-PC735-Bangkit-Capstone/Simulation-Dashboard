<template>
  <div class="container">
    <div class="instruction">Sebelum memulai, mari kita mulai dengan data diri.</div>
    <form @submit.prevent="submitForm">
      <div class="form-row">
        <div class="form-question">
          <label for="fullname">Nama:</label>
        </div>
        <div class="form-input">
          <input
            class="input"
            @blur="submitForm"
            placeholder="Isi nama Anda disini"
            type="text"
            v-model="fullName"
            id="fullname"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-question">
          <label for="age">Umur:</label>
        </div>
        <div class="form-input">
          <input
            class="input"
            @blur="submitForm"
            placeholder="Isi umur Anda disini"
            type="number"
            v-model.number="age"
            id="age"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-question">
          <label for="occupation">Profesi:</label>
        </div>
        <div class="form-input">
          <select class="input" v-model="occupation" @blur="submitForm" id="occupation">
            <option value="Pengusaha Tambak Udang (Intensif)">
              Pengusaha Tambak Udang (Intensif)
            </option>
            <option value="Pemilik Tambak Udang Perorangan">Pemilik Tambak Udang Perorangan</option>
            <option value="Penjaga Tambak Udang">Penjaga Tambak Udang</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-question">
          <label for="machine">Pengguna Alat:</label>
        </div>
        <div class="form-input">
          <select class="input" v-model="machine" @blur="submitForm" id="machine">
            <option value="Kincir Air Diesel">Kincir Air Diesel</option>
            <option value="Kincir Air Listrik">Kincir Air Listrik</option>
            <option value="Kincir Air Listrik & Diesel">Kincir Air Listrik & Diesel</option>
            <option value="Aerator Blower">Aerator Blower</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-question">
          <label for="address">Alamat Daerah:</label>
        </div>
        <div class="form-input">
          <input
            class="input"
            type="text"
            placeholder="Isi alamat lengkap Anda disini"
            v-model="address"
            @blur="submitForm"
            id="address"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      fullName: '',
      age: null,
      occupation: '',
      machine: '',
      address: ''
    }
  },
  methods: {
    submitForm() {
      // Generate a unique ID for the user
      const userID = this.generateUserID()

      // Remember fullname
      if (!sessionStorage.getItem('fullName')) {
        sessionStorage.setItem('fullName', this.fullName)
      }

      // Check if fullName exists on the server
      axios
        .get('http://localhost:8000/identities')
        .then((response) => {
          const existingData = response.data

          // Loop through the existing data to check for a matching fullName
          let isUserIDExists = false
          let existingDataIndex = null

          for (let i = 0; i < existingData.length; i++) {
            if (existingData[i].userID === userID) {
              isUserIDExists = true
              existingDataIndex = i + 1
            }
          }

          if (isUserIDExists) {
            // If fullName exists, use PUT
            axios
              .put('http://localhost:8000/identities/' + existingDataIndex, {
                userID,
                submitionDate: new Date().toISOString().slice(0, 10),
                fullName: this.fullName,
                age: this.age,
                occupation: this.occupation,
                machine: this.machine,
                address: this.address
              })
              .then(() => {
                console.log('Data submitted successfully')
              })
              .catch((error) => {
                console.error('Error submitting data:', error)
              })
          } else {
            // If fullName doesn't exist, use POST
            axios
              .post('http://localhost:8000/identities', {
                userID,
                submitionDate: new Date().toISOString().slice(0, 10),
                fullName: this.fullName,
                age: this.age,
                occupation: this.occupation,
                machine: this.machine,
                address: this.address
              })
              .then(() => {
                console.log('Data submitted successfully')
              })
              .catch((error) => {
                console.error('Error submitting data:', error)
              })
          }
        })
        .catch((error) => {
          console.error('Error fetching existing data:', error)
        })
    },
    generateUserID() {
      let userID = sessionStorage.getItem('userID')

      if (!userID) {
        userID = this.generateRandomID()
        sessionStorage.setItem('userID', userID)
      }

      return userID
    },
    generateRandomID() {
      // Generate a random ID using a combination of timestamp and random number
      const timestamp = new Date().getTime()
      const randomNumber = Math.floor(Math.random() * 1000000)

      return `${timestamp}-${randomNumber}`
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 400px;
  width: 100%;
  padding: 75px 20px;
  background-color: #1d3932;
}

.instruction {
  margin-bottom: 1rem;
}

.form-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 0;
  @media (max-width: 720px) {
    justify-content: space-between;
  }
}

.form-question {
  min-width: 200px;
  @media (max-width: 720px) {
    min-width: 150px;
  }
}

.form-input {
  width: 500px;
  @media (max-width: 720px) {
    max-width: 300px;
  }
}

.input {
  padding: 10px;
  width: 100%;
}
</style>
