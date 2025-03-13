<script setup lang="ts">
import { onMounted } from 'vue'

function getCharStyle(index: number) {
  const totalChars = 'Landing Days'.length
  // Calculate weight from 900 (heaviest) to 100 (lightest)
  const weight = 1000 - Math.floor((index / (totalChars - 1)) * 800)
  return {
    fontWeight: weight,
    fontVariationSettings: `'wght' ${weight}`,
  }
}

// 设定定时变换字体粗细
onMounted(() => {
  setInterval(() => {
    const totalChars = 'Landing Days'.length
    const weight = Math.floor(Math.random() * 900) + 100
    const charIndex = Math.floor(Math.random() * totalChars)
    const char = document.querySelector(`.char:nth-child(${charIndex + 1})`)
    if (char) {
      char.style.fontWeight = weight
      char.style.fontVariationSettings = `'wght' ${weight}`
    }
  }, 1000)
})
</script>

<template>
  <div class="logo-container color-[#303030] dark:color-[#fdfdfd]">
    <span v-for="(char, index) in 'Landing Days'" :key="index" class="char" :style="getCharStyle(index)">
      {{ char }}
    </span>
  </div>
</template>

<style scoped>
.logo-container {
  font-family: 'Inter', sans-serif;
  font-size: 2rem;
  line-height: 1;
  display: flex;
  letter-spacing: -0.02em;
}

.char {
  display: inline-block;
  transition: font-weight 0.3s ease;
}
</style>
