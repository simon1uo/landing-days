<script setup lang="ts">
import HeaderNav from '@/components/HeaderNav.vue'
import { useTitle } from '@vueuse/core'

useTitle('404 | Landing Days')
</script>

<template>
  <div id="not-found">
    <HeaderNav />
    <div class="not-found">
      <h1 class="p-5 font-size-1.5em text-[#303030] font-sans dark:text-[#fdfdfd]">
        <div class="font-size-2em">
          404
        </div>
        You ARE AT NOWHERELAND...
        <div class="nav">
          <RouterLink to="/">
            <span i-uil-arrow-right />back to base
          </RouterLink>
        </div>
      </h1>
    </div>
    <Background />
  </div>
</template>

<style>
.not-found {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
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
}
</style>
