<script setup>
import ThanksSection from '../components/sections/ThanksSection.vue'
import ThanksModal from '../components/ThanksModal.vue'
</script>

<template>
  <ThanksModal v-if="isModalOpen" @close="closeModal">
    <h2>Terima Kasih!</h2>
    <p>Pemenang akan akan dikirimkan pulsa <span>Rp20.000 pada hari Jumat, 26 Mei 2023</span></p>
  </ThanksModal>
  <ThanksSection>
    <template v-slot:content>
      <div class="image"><img src="/ThanksSection.png" alt="Berdoa" /></div>
      <div class="line">
        Ya Tuhan Yang Maha Pemurah, dalam doaku ini aku mendoakan para petambak udang dan semua yang
        bergantung pada hasil tangkapan mereka.
      </div>
      <div class="line">
        Berikanlah keberkahan pada usaha mereka, lindungilah mereka dari segala penyakit dan musibah
        yang dapat menghancurkan hasil panen.
      </div>
      <div class="line">
        Semoga mereka diberi kekuatan, kebijaksanaan, dan kesabaran untuk menjalankan pekerjaan ini.
      </div>
      <div class="line">
        Jadikanlah hasil tangkapan mereka menjadi berkat bagi mereka sendiri dan juga bagi mereka
        yang membutuhkannya.
      </div>
      <div class="punchline">Aamiin, aamiin, aamiin.</div>
    </template>
  </ThanksSection>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: true
    }
  },
  methods: {
    showModal() {
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  margin: 0 auto;
  max-width: 300px;
}

img {
  width: 100%;
}
.punchline {
  font-size: 2rem;
}
.line {
  margin-bottom: 1rem;
}
span {
  white-space: nowrap;
}
</style>
