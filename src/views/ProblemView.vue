<script setup>
import IdentityFormSection from '../components/sections/IdentityFormSection.vue'
import ValidationFormSection from '../components/sections/ValidationFormSection.vue'
import TextExplanationSection from '../components/sections/TextExplanationSection.vue'
import CTAFormSection from '../components/sections/CTAFormSection.vue'
</script>

<template>
  <IdentityFormSection></IdentityFormSection>
  <ValidationFormSection imageSrc="/ValidationFormSection-1.png" validate="statement-1">
    <template v-slot:content>
      1. Kincir memiliki peran penting dalam budidaya tambak sebagai sumber oksigen terlarut dan
      ombak buatan.
    </template>
  </ValidationFormSection>
  <ValidationFormSection imageSrc="/ValidationFormSection-2.png" validate="statement-2">
    <template v-slot:content>
      2. Pada umur udang ke-30, setidaknya dibutuhkan 1 kincir air, kemudian pada umur udang ke-50,
      dibutuhkan minimal 2 kincir air.
    </template>
  </ValidationFormSection>
  <ValidationFormSection imageSrc="/ValidationFormSection-3.png" validate="statement-3">
    <template v-slot:content>
      3. Kincir air merupakan komponen mekanik yang harus beroperasi tanpa henti selama lebih dari
      1000 jam, sehingga kerusakan pada kincir rutin terjadi.
    </template>
  </ValidationFormSection>
  <TextExplanationSection>
    <template v-slot:content>
      Kematian mendadak pada kincir air bisa terjadi pada kincir mesin diesel maupun kincir listrik.
    </template>
  </TextExplanationSection>
  <ValidationFormSection imageSrc="/ValidationFormSection-4.png" validate="statement-4">
    <template v-slot:content>
      4. Pada kincir air mesin diesel, kerusakan umumnya terjadi pada mesin yang rusak atau
      sambungan yang patah. Sedangkan pada kincir air listrik, masalah utama adalah mati listrik.
    </template>
  </ValidationFormSection>
  <ValidationFormSection imageSrc="/ValidationFormSection-5.png" validate="statement-5">
    <template v-slot:content>
      5. Jika kematian kincir terjadi dan petambak tidak segera menangani masalah tersebut, dampak
      kerugian yang mungkin dialami adalah sebesar 7,5 juta rupiah per kuintal udang mati atau
      sekitar 40 juta per tambak.
    </template>
  </ValidationFormSection>
  <ValidationFormSection imageSrc="/ValidationFormSection-6.png" validate="statement-6">
    <template v-slot:content>
      6. Meskipun gagal panen akibat kematian kincir tidak seumum gagal panen akibat wabah penyakit
      di kolam tambak, kerugian yang ditimbulkan tetaplah signifikan.
    </template>
  </ValidationFormSection>
  <TextExplanationSection>
    <template v-slot:content>
      Masalah ini dapat dihindari, yaitu dengan mengawasi kincir sehingga penanganan dapat segera
      dilakukan saat terjadi insiden kincir mati.
    </template>
  </TextExplanationSection>
  <ValidationFormSection imageSrc="/ValidationFormSection-7.png" validate="statement-7">
    <template v-slot:content>
      7. Untuk mengawasi kincir, petambak melakukan: (1) Patroli, sekitar tengah malam. (2)
      Begadang, mulai pukul 8 malam hingga 5 pagi.
    </template>
  </ValidationFormSection>
  <ValidationFormSection imageSrc="/ValidationFormSection-8.png" validate="statement-8">
    <template v-slot:content>
      8. Namun, solusi tersebut membutuhkan tenaga dan masih memiliki risiko gagal panen jika
      terjadi kerusakan pada kincir di waktu yang tidak terduga.
    </template>
  </ValidationFormSection>
  <CTAFormSection action="Kirim">
    <template v-slot:instructionText>
      Untuk dapat menerima ide solusi dan undian pulsa Rp20.000, anda dapat mengisi nomor telepon di
      bawah.
    </template>
    <template v-slot:thanksText>Terima kasih ya! Matur nuwun! </template>
  </CTAFormSection>
</template>

<script>
export default { components: { IdentityFormSection } }
</script>

<style lang="scss" scoped></style>
