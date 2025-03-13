<script setup lang="ts">

</script>

<template>
  <div class="footer absolute bottom-0 z-50 box-border w-full flex justify-end p-5">
    <span class="color-[#303030] dark:color-[#fdfdfd]"> <span i-uil-copyright /><a href="https://github.com/simon1uo" target="_blank" title="simon1uo@github">simon1uo</a>(2023~present)</span>
  </div>
</template>

<style scoped>
.footer {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1;
  display: flex;
  color: #303030;
  text-decoration: none;
  opacity: 0.3;
  transition: opacity 1s ease;
}

.footer:hover {
  opacity: 1;
}

.footer a {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}
</style>
