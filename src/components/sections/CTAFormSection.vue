<template>
  <div class="container">
    <div class="text">
      <slot name="instructionText"></slot>
    </div>
    <div class="form-row">
      <input
        class="input"
        type="text"
        placeholder="Isi nomor telepon anda disini"
        v-model="phoneNumber"
        @blur="submitForm"
        id="phoneNumber"
      />
      <router-link v-if="phoneNumber" to="/thanks">
        <button @click="start" :disabled="isButtonDisabled" class="button">Kirim</button>
      </router-link>
    </div>
    <div class="thanks-text">
      <slot name="thanksText"></slot>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      phoneNumber: ''
    }
  },
  methods: {
    submitForm() {
      // Generate a unique ID for the user
      const userID = this.generateUserID()
      const fullName = sessionStorage.getItem('fullName')

      // Check if fullName exists on the server
      axios
        .get('https://rich-lime-goshawk-sock.cyclic.app/contacts')
        .then((response) => {
          const existingData = response.data

          // Loop trough existingData to find the userID
          let isUserIDExists = false
          let existingDataIndex = null

          for (let i = 0; i < existingData.length; i++) {
            if (existingData[i].userID === userID) {
              isUserIDExists = true
              existingDataIndex = i + 1
            }
          }

          if (isUserIDExists) {
            // If userID exists, use PUT
            axios
              .put('https://rich-lime-goshawk-sock.cyclic.app/contacts/' + existingDataIndex, {
                userID,
                fullName,
                phoneNumber: this.phoneNumber
              })
              .then(() => {
                console.log('Data submitted successfully')
              })
              .catch((error) => {
                console.error('Error submitting data:', error)
              })
          } else {
            // If userID doesn't exist, use POST
            axios
              .post('https://rich-lime-goshawk-sock.cyclic.app/contacts', {
                userID,
                fullName,
                phoneNumber: this.phoneNumber
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
    },
    start() {
      this.$confetti.start()

      setTimeout(() => {
        this.$confetti.stop()
      }, 5000)
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
  min-height: 200px;
  width: 100%;
  background-color: #1d3932;
  padding: 75px 20px;
  // border: 1px solid red;
}

.text {
  text-align: center;
  color: #fafafa;
  font-size: 1rem;
  margin-bottom: 20px;
}

.thanks-text {
  text-align: center;
  color: #fafafa;
  font-size: 1.2rem;
  margin-top: 20px;
}

.form-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.input {
  width: 250px;
  padding: 10px;
  border-radius: 5px;
  border-width: 1px;
  font-size: 1rem;

  &::placeholder {
    text-align: center;
  }
}

.button {
  width: 100px;
  height: 40px;
  padding: 10px;
  cursor: pointer;
  outline: none;
  border: 0;
  border-radius: 5px;
  color: #fafafa;
  font-weight: 400;
  font-family: Roboto;
  font-size: 1rem;
  background-color: hsl(160, 98%, 19%);
  &:hover {
    background-color: hsl(160, 98%, 20%);
  }
  &:active {
    transform: scale(0.99);
    border: 0.5px solid rgba(17, 17, 17, 70%);
    box-shadow: inset 1px 1px 1px rgb(17, 17, 17, 50%);
  }
}
</style>
