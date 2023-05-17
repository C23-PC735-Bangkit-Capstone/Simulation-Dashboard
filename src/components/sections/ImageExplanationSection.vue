<template>
  <div class="container">
    <div class="image-side">
      <div class="image-frame">
        <img :src="imageSrc" :alt="imageAlt" class="image" />
      </div>
    </div>
    <div class="text-side">
      <div class="text">
        {{ introText }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      required: true
    },
    introText: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 400px;
  width: 100%;
  background-color: #e4ecee;
}
.image-side {
  display: flex;
  flex: 50%;
  align-items: center;
  justify-content: center;
  padding: 30px 30px 0;
  // border: 1px solid red;
}
.image-frame {
  display: flex;
  justify-content: center;
  align-items: end;
  width: 100%;
  border-radius: 20px;
  background-color: #d9d9d9;
}
.image {
  max-width: 100%;
  max-height: 100%;
}
.text-side {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 50%;
  padding: 30px;
  color: var(--vt-c-text-light-1);
  // border: 1px solid blue;
}

.text {
  text-align: center;
  font-size: 1rem;
}
</style>
