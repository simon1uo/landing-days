<script setup lang="ts">
import { useDark } from '@vueuse/core'
import Logo from './Logo.vue'

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

const route = useRoute()
function isActive(path: string) {
  return path === route.path
}
</script>

<template>
  <header class="header fixed right-0 top-0 z-50 box-border w-full flex justify-between p-5">
    <RouterLink to="/" class="logo-link">
      <Logo />
    </RouterLink>

    <nav class="nav color-[#303030] font-sans dark:color-[#fdfdfd]">
      (<span class="cursor-pointer font-size-1.5em" @click="toggleDark">
        <span v-if="isDark" i-uil-moon />
        <span v-else i-uil-sun />
      </span>)
      <RouterLink to="/" class="lt-md:hidden" :class="{ 'font-bold': isActive('/') }">
        Home
      </RouterLink> /
      <RouterLink to="/about" class="lt-md:hidden" :class="{ 'font-bold': isActive('/about') }">
        About
      </RouterLink> /
      <a href="https://github.com/simon1uo/landing-days" target="_blank" title="GitHub" class="lt-md:hidden">
        GitHub (<span i-uil-github />)
      </a> /
      <a>Start Landing<span i-uil-arrow-right /></a>
    </nav>
  </header>
</template>

<style scoped>
.logo-link {
  text-decoration: none;
}

.nav {
  display: grid;
  align-items: center;
  grid-template-columns: auto max-content;
  box-sizing: border-box;
  grid-gap: 0.5rem;
  grid-auto-flow: column;
}

.nav a {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: opacity 1s ease, font-weight 1s ease;
  opacity: 0.6;
  outline: none;
  font-size: 1.5rem;
  line-height: 1;
  font-weight: light;
  letter-spacing: -0.05em;
}

.nav a:hover {
  opacity: 1;
  text-decoration-color: inherit;
  font-weight: bold;
}
</style>
