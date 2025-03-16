<script setup lang="ts">
import { useScroll } from '@vueuse/core'

function handleGetLogoPosition() {
  const textElements = document.querySelectorAll('.text-gradient')
  textElements.forEach((text) => {
    if (text && text instanceof HTMLElement) {
      const bounding = text.getBoundingClientRect()
      text.style.setProperty('--position-x', `${bounding.left}px`)
      text.style.setProperty('--position-y', `${bounding.top}px`)
    }
  })
}

onMounted(() => {
  handleGetLogoPosition()
  document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e

    const day1 = document.querySelector('#day1')
    if (day1 && day1 instanceof HTMLElement) {
      day1.style.setProperty('--x', `${clientX}px`)
      day1.style.setProperty('--y', `${clientY}px`)
    }
  })
})

const { y } = useScroll(document)
watch(() => y.value, () => {
  handleGetLogoPosition()
})

const ContentList = [
  { title: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quidem.' },
  { title: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quidem.' },
  { title: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quidem.' },

]
</script>

<template>
  <main id="day1" class="h-full w-full overflow-auto bg-slate-950">
    <div class="relative z-100 py-24 pt-20">
      <div class="mx-auto max-w-7xl flex flex-col gap-16 px-4 sm:gap-y-24 lg:px-8 sm:px-6">
        <div class="text-center font-[Roboto]">
          <h1
            class="logo text-gradient inline-block select-none text-5xl text-white font-semibold lg:text-8xl md:text-7xl sm:text-6xl"
          >
            Lorem Ipsum
          </h1>
          <div class="text-gradient mt-6 text-2xl text-gray-500 font-bold font-semibold dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            consequuntur, quibusdam voluptatibus voluptatem eveniet
          </div>

          <div class="mt-20 flex flex-wrap justify-center gap-x-10 gap-y-3">
            <span i-simple-icons-x class="h-10 w-10 cursor-pointer text-gray-400 hover-text-gray-300" />
            <span i-simple-icons-linkedin class="h-10 w-10 cursor-pointer text-gray-400 hover-text-gray-300" />
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto flex flex-col gap-16 px-4 lg:px-8 sm:px-6">
      <div class="flex flex-col gap-8">
        <div
          v-for="(content, index) in ContentList" :key="index"
          class="bg-card flex flex-col cursor-pointer justify-center px-4 py-5"
        >
          <div class="flex flex-col gap-y-2">
            <div class="text-3xl color-gray-200 font-semibold">
              {{ content.title }}
            </div>
            <p class="color-gray-400">
              {{ content.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
#day1 {
  --x: 0px;
  --y: 0px;
  --position-x: 0px;
  --position-y: 0px;
  --background-color: #f1f5f966;
  --highlight-color: #f1f5f9;
  --highlight-size: 2em;

  --border-radius: 0.75rem;
}

#day1::-webkit-scrollbar {
  background-color: transparent;
  height: 0.6em;
  width: 0.6em;
}

.text-gradient {
  color: #f1f5f966;
  background: linear-gradient(90deg, #f1f5f966 4.65%, #f1f5f9 51.22%, #f1f5f966 93.04%);
  background-image: linear-gradient(90deg, var(--background-color) 0, var(--highlight-color) 50%, var(--background-color) 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 100%;
  background-position-x: var(--x);
}

.bg-card {
  position: relative;
  background: linear-gradient(0deg, #0f172a80, #0f172a80), linear-gradient(180deg, #33415580, #02042080 33.92%);
  border-radius: var(--border-radius);
  background-clip: padding-box;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius);
  z-index: 1;
}

.bg-card:hover {
  outline: 1px solid rgb(148 163 184);
}
</style>
