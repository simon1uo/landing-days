<script setup lang="ts">
import Background from '@/components/Background.vue'
import Footer from '@/components/Footer.vue'
import HeaderNav from '@/components/HeaderNav.vue'
// const isDark = useDark()
// const toggleDark = useToggle(isDark)
</script>

<template>
  <div id="home-view">
    <HeaderNav />
    <div class="content">
      <RouterView v-slot="{ Component }">
        <Transition name="fade">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </div>
    <Footer />
    <Background />
  </div>
</template>

<style>
.content {
  padding-top: 4.5rem;
  padding-bottom: 4.5rem;
  height: calc(100vh - 9rem);
  position: relative;
  overflow: hidden;
}
</style>
