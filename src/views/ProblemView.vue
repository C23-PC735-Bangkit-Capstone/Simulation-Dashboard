<script setup>
import IdentityFormSection from '../components/sections/IdentityFormSection.vue'
import ValidationFormSection from '../components/sections/ValidationFormSection.vue'
import TextExplanationSection from '../components/sections/TextExplanationSection.vue'
import CTASection from '../components/sections/CTASection.vue'
</script>

<template>
  <IdentityFormSection></IdentityFormSection>
  <ValidationFormSection></ValidationFormSection>
  <ValidationFormSection></ValidationFormSection>
  <ValidationFormSection></ValidationFormSection>
  <TextExplanationSection>
    <template v-slot:content>
      Kematian mendadak pada kincir air bisa terjadi pada kincir mesin diesel maupun kincir listrik.
    </template>
  </TextExplanationSection>
  <ValidationFormSection></ValidationFormSection>
  <ValidationFormSection></ValidationFormSection>
  <ValidationFormSection></ValidationFormSection>
  <TextExplanationSection>
    <template v-slot:content>
      Masalah ini dapat dihindari, yaitu dengan mengawasi kincir sehingga penanganan dapat segera
      dilakukan saat terjadi insiden kincir mati.
    </template>
  </TextExplanationSection>
  <ValidationFormSection></ValidationFormSection>
  <ValidationFormSection></ValidationFormSection>
  <CTASection action="Kirim">
    <template v-slot:text>
      Untuk dapat menerima ide solusi dan undian pulsa Rp20.000, anda dapat mengisi nomor telepon di
      bawah.
    </template>
  </CTASection>
</template>

<script>
export default { components: { IdentityFormSection } }
</script>

<style lang="scss" scoped></style>
