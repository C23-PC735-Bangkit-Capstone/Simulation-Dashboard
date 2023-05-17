<script setup>
import IntroductionSection from '../components/sections/IntroductionSection.vue'
import ImageExplanationSection from '../components/sections/ImageExplanationSection.vue'
import TextExplanationSection from '../components/sections/TextExplanationSection.vue'
import CTASection from '../components/sections/CTASection.vue'
</script>

<template>
  <IntroductionSection />
  <ImageExplanationSection
    image-src="/ImageExplanationSection-1.png"
    image-alt="Peta Desa Jatimalang, Purworejo, Jawa Tengah"
    intro-text="Saya telah mengunjungi Desa Jatimalang selama periode Februari-Mei, sebuah desa petambak udang yang mayoritas menggunakan teknologi kincir air diesel."
  />
  <ImageExplanationSection
    image-src="/ImageExplanationSection-2.png"
    image-alt="Gagal Panen akibat Kematian Mendadak Kincir Air"
    intro-text="Tujuan kunjungan saya adalah untuk berbincang dengan beberapa petambak dan mengidentifikasi masalah kematian mendadak pada kincir air yang mengakibatkan gagal panen."
  />
  <TextExplanationSection
    text="Berdasarkan kunjungan tersebut, saya telah mengumpulkan beberapa informasi yang perlu dikonfirmasi agar menjadi lebih akurat."
  />
  <CTASection
    text="Jika Anda bersedia membantu saya dalam memvalidasi 8 buah pernyataan,saya akan mengirimkan ide solusi yang terjangkau dan efektif yang telah saya siapkan dan pulsa senilai Rp20.000 untuk 10 orang yang paling informatif."
  />
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
