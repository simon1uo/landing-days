<script setup lang="ts">
import Logo from './Logo.vue'
</script>

<template>
  <header class="header fixed right-0 top-0 z-50 box-border w-full flex justify-between p-5">
    <RouterLink to="/" class="logo-link">
      <Logo />
    </RouterLink>

    <nav class="nav color-[#303030] dark:color-[#fdfdfd]">
      <RouterLink to="/" class="lt-md:hidden">
        Home / <div i-uil-home />
      </RouterLink>
      <RouterLink to="/about" class="lt-md:hidden">
        About /
      </RouterLink>
      <a href="https://github.com/simon1uo/landing-days" target="_blank" title="GitHub" class="lt-md:hidden">
        GitHub (<span i-uil-github />) /
      </a>
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
  transition: opacity 1s ease;
  opacity: 0.6;
  outline: none;
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  line-height: 1;
}

.nav a:hover {
  opacity: 1;
  text-decoration-color: inherit;
}
</style>
