<script setup>
import IntroductionSection from '../components/sections/IntroductionSection.vue'
import ImageExplanationSection from '../components/sections/ImageExplanationSection.vue'
import TextExplanationSection from '../components/sections/TextExplanationSection.vue'
import CTASection from '../components/sections/CTASection.vue'
</script>

<template>
  <IntroductionSection />
  <ImageExplanationSection
    image-src="/ImageExplanationSection-1"
    image-alt="Peta Desa Jatimalang, Purworejo, Jawa Tengah"
  >
    <template v-slot:content>
      Saya telah mengunjungi Desa Jatimalang selama periode Februari-Mei, sebuah desa petambak udang
      yang mayoritas menggunakan teknologi kincir air diesel.
    </template>
  </ImageExplanationSection>
  <ImageExplanationSection
    image-src="/ImageExplanationSection-2"
    image-alt="Gagal Panen akibat Kematian Mendadak Kincir Air"
  >
    <template v-slot:content>
      Tujuan kunjungan saya adalah untuk berbincang dengan beberapa petambak dan mengidentifikasi
      masalah kematian mendadak pada kincir air yang <span>mengakibatkan gagal panen.</span>
    </template>
  </ImageExplanationSection>
  <TextExplanationSection>
    <template v-slot:content>
      Berdasarkan kunjungan tersebut, saya telah mengumpulkan beberapa informasi yang
      <b>perlu dikonfirmasi</b> <span>agar menjadi lebih akurat.</span>
    </template>
  </TextExplanationSection>
  <CTASection action="Ya, saya bersedia">
    <template v-slot:text>
      Jika Anda bersedia membantu saya dalam memvalidasi <span>8 buah</span> pernyataan,
      <span>saya akan mengirimkan:</span>
      <ol>
        <li>Ide solusi terjangkau yang telah saya siapkan,</li>
        <li>Pulsa Rp20.000 untuk 10 orang paling informatif.</li>
      </ol>
    </template>
  </CTASection>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
b {
  white-space: nowrap;
  color: #1d3932;
  font-weight: bold;
}
span {
  white-space: nowrap;
}
ol {
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
li {
  max-width: 600px;
}
</style>
