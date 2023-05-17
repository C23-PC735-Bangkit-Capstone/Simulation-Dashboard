<script setup>
import IntroductionSection from '../components/sections/IntroductionSection.vue'
import ImageExplanationSection from '../components/sections/ImageExplanationSection.vue'
import TextExplanationSection from '../components/sections/TextExplanationSection.vue'
import CTASection from '../components/sections/CTASection.vue'
</script>

<template>
  <IntroductionSection />
  <ImageExplanationSection
<<<<<<< HEAD
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
        <li>Ide solusi yang terjangkau dan efektif rancangan saya,</li>
        <li>Pulsa senilai Rp20.000 untuk 10 orang paling informatif.</li>
      </ol>
    </template>
  </CTASection>
=======
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
>>>>>>> 64b84e9 (init)
</template>

<script>
export default {}
</script>

<<<<<<< HEAD
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
=======
<style lang="scss" scoped></style>
>>>>>>> 64b84e9 (init)
