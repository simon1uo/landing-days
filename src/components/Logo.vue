<script setup lang="ts">
import { useDark } from '@vueuse/core'

const LOGO_TEXT = 'LandingDays'
const AnimationDuration = 3
const DelayBetweenChars = 0.2

const characters = ref<{
  char: string,
  isSpace: boolean,
  key: string,
}[]>([])

// function getCharStyle(index: number) {
//   const totalChars = LOGO_TEXT.length
//   // Calculate weight from 900zZ (heaviest) to 100 (lightest)
//   const weight = 1000 - Math.floor((index / (totalChars - 1)) * 800)
//   return {
//     fontWeight: weight,
//     fontVariationSettings: `'wght' ${weight}`,
//   }
// }



function initCharacters() {
  for (let index = 0; index < LOGO_TEXT.length; index++) {
    const element = LOGO_TEXT[index];
    if (element !== ' ') {
      characters.value.push({
        char: element,
        isSpace: false,
        key: `char-${index}`
      })
    } else {
      characters.value.push({
        char: ' ',
        isSpace: true,
        key: `space-${index}`
      })
    }
  }
  console.log(characters.value);
}

onMounted(() => {
  initCharacters()
})


</script>

<template>
  <div class="logo-container font-variables color-[#303030] dark:color-[#fdfdfd]">
    <template v-for="(item, index) in characters" :key="item.key">
      <span v-if="item.isSpace" class="inline-block w-2">
      </span>
      <span v-else class="inline-block" :style="{
        animation: `fontWeightAnimate ${AnimationDuration}s infinite alternate`,
        animationDelay: `${index * DelayBetweenChars}s`,
      }">{{ item.char }}</span>
    </template>
  </div>
</template>

<style>
.logo-container {
  font-size: 2rem;
  line-height: 1;
  display: flex;
  letter-spacing: -0.02em;
  align-items: center;
}

@keyframes fontWeightAnimate {
  0% {
    font-weight: 900;
    font-variation-settings: 'wght' 900;
  }

  100% {
    font-weight: 100;
    font-variation-settings: 'wght' 100;
  }
}
</style>
