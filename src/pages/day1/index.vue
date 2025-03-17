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

function handleGetCardPosition() {
  const bgCard = document.querySelectorAll('.bg-card')
  bgCard.forEach((card) => {
    if (card && card instanceof HTMLElement) {
      const bounding = card.getBoundingClientRect()
      card.style.setProperty('--position-x', `${bounding.left}px`)
      card.style.setProperty('--position-y', `${bounding.top}px`)
    }
  })
}

onMounted(() => {
  handleInitParticles()
  handleGetLogoPosition()
  handleGetCardPosition()
  document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e

    const day1 = document.querySelector('#day1')
    if (day1 && day1 instanceof HTMLElement) {
      day1.style.setProperty('--x', `${clientX}px`)
      day1.style.setProperty('--y', `${clientY}px`)
    }
  })
})

const day1 = ref<HTMLElement | null>(null)
const { y } = useScroll(day1)

watch(() => y.value, () => {
  handleGetCardPosition()
})

const ContentList = [
  {
    title: 'Lorem Content',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quidem.',
  },
  { title: 'Lorem Hub', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quidem.' },
  { title: 'Lorem Devtools', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quidem.' },

]

const particles = ref<{
  id: number
  x: number
  y: number
  opacity: number
  speed: number
  delay: number
}[]>([])

function handleInitParticles() {
  particles.value = []
  for (let i = 0; i < 100; i++) {
    particles.value.push({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      opacity: Math.random() * 0.5 + 0.5,
      speed: Math.random() * 5 + 2,
      delay: Math.random() * 5,
    })
  }
}
</script>

<template>
  <main id="day1" ref="day1" class="h-full w-full overflow-auto bg-slate-950">
    <div class="relative z-100 py-24 pt-20">
      <div class="mx-auto max-w-7xl flex flex-col gap-16 px-4 sm:gap-y-24 lg:px-8 sm:px-6">
        <div class="text-center">
          <h1
            class="logo-text text-gradient inline-block select-none text-5xl text-white font-semibold lg:text-8xl md:text-7xl sm:text-6xl"
          >
            Lorem Ipsum
          </h1>
          <div class="text-gradient mt-6 text-xl text-gray-500 font-bold font-semibold dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            consequuntur, quibusdam voluptatibus voluptatem eveniet
          </div>

          <div class="mt-20 flex flex-wrap justify-center gap-x-10 gap-y-3">
            <span i-simple-icons-x class="h-10 w-10 cursor-pointer text-gray-400 hover-text-gray-300" />
            <span i-simple-icons-linkedin class="h-10 w-10 cursor-pointer text-gray-400 hover-text-gray-300" />
          </div>
        </div>
      </div>

      <!-- svg动画背景颗粒 -->
      <svg class="absolute inset-0 left-50% top-50% h-full w-full translate--50%" xmlns="http://www.w3.org/2000/svg">
        <rect
          v-for="particle in particles" :key="particle.id" :x="particle.x" :y="particle.y" :width="1" :height="1"
          :fill="`rgba(255, 255, 255, ${particle.opacity})`"
          :style="{ animationDuration: `${particle.speed}s`, animationDelay: `${particle.delay}s` }"
        />
      </svg>
    </div>

    <div class="mx-auto flex flex-col gap-16 px-98 lg:px-8 sm:px-6">
      <div class="flex flex-col gap-8">
        <div
          v-for="(content, index) in ContentList" :key="index"
          class="bg-card flex flex-col cursor-pointer justify-center px-6 py-8"
        >
          <div class="flex flex-col gap-y-2">
            <div class="text-3xl color-gray-200 font-semibold">
              {{ content.title }}
            </div>
            <div class="text-lg color-gray-400">
              {{ content.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
@import url(https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap);

#day1 {
  font-family: Public Sans, "Public Sans Fallback: Arial", ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
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

.logo-text {
  letter-spacing: -.025em;
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
  box-sizing: border-box;
  background: linear-gradient(0deg, #0f172a80, #0f172a80), linear-gradient(180deg, #33415580, #02042080 33.92%);
  border-radius: var(--border-radius);
  background-clip: padding-box;
  border: 3px solid transparent;
  position: relative;
  /* overflow: hidden; */
  border-radius: var(--border-radius);
  z-index: 1;
}

.bg-card:hover {
  outline: 1px solid rgb(148 163 184);
}

.bg-card::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  filter: blur(10px);
  background: radial-gradient(circle at center,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(255, 255, 255, 0.15) 15%,
      rgba(255, 255, 255, 0.1) 15.1%,
      rgba(255, 255, 255, 0.1) 30%,
      rgba(255, 255, 255, 0.05) 30.1%,
      rgba(255, 255, 255, 0.05) 45%,
      rgba(255, 255, 255, 0.01) 45.1%,
      rgba(255, 255, 255, 0.01) 60%,
      rgba(255, 255, 255, 0) 60.1%);
  opacity: 0.2;

  background-size: 300px 300px;
  background-repeat: no-repeat;
  background-position-x: calc(var(--x) - var(--position-x) - calc(300px / 2));
  background-position-y: calc(var(--y) - var(--position-y) - calc(300px / 2));
}

.bg-card::after {
  content: '';
  position: absolute;
  border-radius: var(--border-radius);

  width: calc(100% + 3px);
  height: calc(100% + 3px);
  left: -3px;
  top: -3px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 60%);
  background-size: 300px 300px;
  background-repeat: no-repeat;
  background-position-x: calc(var(--x) - var(--position-x) - calc(300px / 2));
  background-position-y: calc(var(--y) - var(--position-y) - calc(300px / 2));
  padding: 2px;
  mask: linear-gradient(#000 0 100%) content-box,
    linear-gradient(#fff 0 100%);
  -webkit-mask:
    linear-gradient(#000 0 100%) content-box,
    linear-gradient(#fff 0 100%);
  -webkit-mask-composite: xor;
  mask-composite: xor;
}

@keyframes moveUp {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-100vh);
  }
}

svg rect {
  animation: moveUp linear infinite;
}
</style>
