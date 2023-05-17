<template>
  <div class="container">
    <div class="image-side">
      <div class="image-frame">
        <img alt="Yahya Aqrom" class="image" src="/IntroductionSectionYahya.png" />
      </div>
    </div>
    <div class="text-side">
      <div class="text-salam">Assalamualaikum!</div>
      <div class="text-intro">
        Perkenalkan, nama saya Yahya Aqrom, seorang mahasiswa dari ITB yang tertarik dalam
        mempelajari permasalahan kincir air tambak udang.
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: 400px;
  width: 100%;
  background-color: #1d3932;
}
.image-side {
  display: flex;
  flex: 50%;
  align-items: center;
  justify-content: center;
  padding: 20px;
  // border: 1px solid red;
}
.image-frame {
  display: flex;
  justify-content: center;
  align-items: end;
  aspect-ratio: 3 / 5;
  width: 80%;
  max-height: 300px;
  max-width: 500px;
  border-radius: 20px 20px 0 0;
  background-color: #016241;
  @media (max-width: 1024px) {
    width: 100%;
    height: 240px;
  }
}
.image {
  max-width: 100%;
  max-height: 80%;

  @media (max-width: 1024px) {
    height: 225px;
  }
}
.text-side {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 50%;
  padding: 30px;
  @media (max-width: 1024px) {
    padding-top: 0;
  }
}
.text-salam {
  text-align: center;
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 1rem;
}
.text-intro {
  text-align: center;
  font-size: 1rem;
}
</style>
