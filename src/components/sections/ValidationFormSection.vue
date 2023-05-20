<template>
  <div class="container">
    <div class="statement-side">
      <div class="image-frame">
        <img class="image" alt="Yahya Aqrom" :src="imageSrc" />
      </div>
      <div class="statement">
        <slot name="content"></slot>
      </div>
    </div>
    <div class="form-side">
      <div class="form-input">
        <div class="instruction">
          Pernyataan ({{ validate.charAt(validate.length - 1) }}) tersebut:
        </div>
        <label class="form-option">
          <input
            class="input"
            type="radio"
            v-model="validation"
            value="Sangat akurat"
            @click="submitForm"
          />
          Sangat akurat
        </label>
        <label class="form-option">
          <input
            class="input"
            type="radio"
            v-model="validation"
            value="Akurat, saya punya info tambahan"
            @click="submitForm"
          />
          Akurat, saya punya info tambahan
        </label>
        <label class="form-option">
          <input
            class="input"
            type="radio"
            v-model="validation"
            value="Kurang akurat, saya akan tambahkan"
            @click="submitForm"
          />
          Kurang akurat, saya akan tambahkan
        </label>
        <label class="form-option">
          <input
            class="input"
            type="radio"
            v-model="validation"
            value="Tidak akurat, saya akan luruskan"
            @click="submitForm"
          />
          Tidak akurat, saya akan luruskan
        </label>
        <div>
          <textarea
            v-if="
              validation === 'Akurat, saya punya info tambahan' ||
              validation === 'Kurang akurat, saya akan tambahkan' ||
              validation === 'Tidak akurat, saya akan luruskan'
            "
            class="additionalInput"
            type="text"
            v-model="additionalInfos"
            @blur="submitForm"
            rows="5"
            placeholder="Isi informasi tambahan Anda disini"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    validate: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      validation: '',
      additionalInfos: ''
    }
  },
  methods: {
    submitForm() {
      // Generate a unique ID for the user
      const userID = this.generateUserID()
      const fullName = sessionStorage.getItem('fullName')

      // Check if fullName exists on the server
      axios
        .get('https://rich-lime-goshawk-sock.cyclic.app/' + this.validate)
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
              .put(
                'https://rich-lime-goshawk-sock.cyclic.app/' +
                  this.validate +
                  '/' +
                  existingDataIndex,
                {
                  userID,
                  fullName,
                  validation: this.validation,
                  additionalInfos: this.additionalInfos
                }
              )
              .then(() => {
                console.log('Data submitted successfully')
              })
              .catch((error) => {
                console.error('Error submitting data:', error)
              })
          } else {
            // If userID doesn't exist, use POST
            axios
              .post('https://rich-lime-goshawk-sock.cyclic.app/' + this.validate, {
                userID,
                fullName,
                validation: this.validation,
                additionalInfos: this.additionalInfos
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
  flex-direction: row;
  flex-wrap: wrap;
  min-height: 400px;
  width: 100%;
}
.statement-side {
  display: flex;
  flex: 50%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
  background-color: #fafafa;
  // border: 1px solid red;
}
.image-frame {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 400px;
  border-radius: 20px;
  overflow: hidden;
}
.image {
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.statement {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 550px;
  margin-top: 1rem;
  font-size: 1rem;
  @media (max-width: 1024px) {
    text-align: justify;
  }
  color: #181818;
}

.form-side {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 50%;
  padding: 30px;
  background-color: #e4ecee;
  border-bottom: 5px solid #fafafa;
}

.form-input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #181818;
}

.instruction {
  text-align: center;
}

.form-option {
  margin: 5px;
}

.form-option input.input {
  margin-right: 15px;
}

.additionalInput {
  margin-top: 1rem;
  padding: 10px;
  width: 100%;
}
</style>
