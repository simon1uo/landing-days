<script setup lang="ts">
import Footer from '@/components/Footer.vue'
import HeaderNav from '@/components/HeaderNav.vue'
import { useDark, useToggle } from '@vueuse/core'
import { onMounted, ref } from 'vue'
// const isDark = useDark()
// const toggleDark = useToggle(isDark)
</script>

<template>
  <HeaderNav />
  <div class="content">
    <Transition name="fade">
      <RouterView />
    </Transition>
  </div>
  <Footer />
  <div class="main absolute left-0 top-0 h-screen w-screen overflow-hidden bg-base" />
</template>

<style>
.main {
  background-image:
    radial-gradient(closest-side, rgb(0, 0, 0), rgba(235, 105, 78, 0)),
    radial-gradient(closest-side, rgb(63, 63, 63), rgba(243, 11, 164, 0)),
    radial-gradient(closest-side, rgb(120, 120, 120), rgba(254, 234, 131, 0)),
    radial-gradient(closest-side, rgb(143, 143, 143), rgba(170, 142, 245, 0)),
    radial-gradient(closest-side, rgb(11, 11, 11), rgba(248, 192, 147, 0));
  background-size:
    130vmax 130vmax,
    80vmax 80vmax,
    90vmax 90vmax,
    110vmax 110vmax,
    90vmax 90vmax;
  background-position:
    -80vmax -80vmax,
    60vmax -30vmax,
    10vmax 10vmax,
    -30vmax -10vmax,
    50vmax 50vmax;
  background-repeat: no-repeat;
  animation: 10s movement linear infinite;
  z-index: -1;
}

/* 暗黑模式 */
@media (prefers-color-scheme: dark) {
  .main {
    background-image:
      radial-gradient(closest-side, rgb(0, 0, 0), rgba(235, 105, 78, 0)),
      radial-gradient(closest-side, rgb(63, 63, 63), rgba(243, 11, 164, 0)),
      radial-gradient(closest-side, rgb(120, 120, 120), rgba(254, 234, 131, 0)),
      radial-gradient(closest-side, rgb(143, 143, 143), rgba(170, 142, 245, 0)),
      radial-gradient(closest-side, rgb(199, 199, 199), rgba(248, 192, 147, 0));
  }
}

.main::after {
  position: absolute;
  left: 0;
  top: 0;
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(50px);
}

@keyframes movement {

  0%,
  100% {
    background-size:
      130vmax 130vmax,
      80vmax 80vmax,
      90vmax 90vmax,
      110vmax 110vmax,
      90vmax 90vmax;
    background-position:
      -80vmax -80vmax,
      60vmax -30vmax,
      10vmax 10vmax,
      -30vmax -10vmax,
      50vmax 50vmax;
  }

  25% {
    background-size:
      100vmax 100vmax,
      90vmax 90vmax,
      100vmax 100vmax,
      90vmax 90vmax,
      60vmax 60vmax;
    background-position:
      -60vmax -90vmax,
      50vmax -40vmax,
      0vmax -20vmax,
      -40vmax -20vmax,
      40vmax 60vmax;
  }

  50% {
    background-size:
      80vmax 80vmax,
      110vmax 110vmax,
      80vmax 80vmax,
      60vmax 60vmax,
      80vmax 80vmax;
    background-position:
      -50vmax -70vmax,
      40vmax -30vmax,
      10vmax 0vmax,
      20vmax 10vmax,
      30vmax 70vmax;
  }

  75% {
    background-size:
      90vmax 90vmax,
      90vmax 90vmax,
      100vmax 100vmax,
      90vmax 90vmax,
      70vmax 70vmax;
    background-position:
      -50vmax -40vmax,
      50vmax -30vmax,
      20vmax 0vmax,
      -10vmax 10vmax,
      40vmax 60vmax;
  }
}

.content {
  padding-top: 4.5rem;
  padding-bottom: 4.5rem;
  height: calc(100vh - 9rem);
  position: relative;
  overflow: hidden;
}
</style>
