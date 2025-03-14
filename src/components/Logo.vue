<script setup lang="ts">
import { useDark } from '@vueuse/core'
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
    if (char && char instanceof HTMLElement) {
      char.style.fontWeight = `${weight}`
      char.style.fontVariationSettings = `'wght' ${weight}`
    }
  }, 1000)
})

const isDark = useDark()

function toggleDark(event: MouseEvent) {
  // @ts-expect-error experimental API
  const isAppearanceTransition = document.startViewTransition
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!isAppearanceTransition) {
    isDark.value = !isDark.value
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  const transition = document.startViewTransition(async () => {
    isDark.value = !isDark.value
  })
  transition.ready
    .then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ]
      document.documentElement.animate(
        {
          clipPath: isDark.value
            ? [...clipPath].reverse()
            : clipPath,
        },
        {
          duration: 400,
          easing: 'ease-out',
          pseudoElement: isDark.value
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)',
        },
      )
    })
}
</script>

<template>
  <div class="logo-container color-[#303030] dark:color-[#fdfdfd]">
    <span v-for="(char, index) in 'Landing Days'" :key="index" class="char" :style="getCharStyle(index)">
      {{ char }}
    </span>

    (<span class="mode-toggler font-size-1.1em" @click="toggleDark">
      <span v-if="isDark" i-uil-moon />
      <span v-else i-uil-sun />
    </span>)
  </div>
</template>

<style scoped>
.logo-container {
  font-family: 'Inter', sans-serif;
  font-size: 2rem;
  line-height: 1;
  display: flex;
  letter-spacing: -0.02em;
  align-items: center;
}

.char {
  display: inline-block;
  transition: font-weight 0.3s ease;
}
</style>
