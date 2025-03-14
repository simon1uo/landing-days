<template>
  <div class="about p-5 font-size-1.5em text-[#303030] dark:text-[#fdfdfd]">
    <div class="about-content">
      <div class="h-1 font-bold">
        ABOUT this PROJECT ( <span i-uil-rocket /> )
      </div>
      <br>
      <p>
        built with <span class="font-bold"> <span i-file-icons-vite /> Vite / <span i-file-icons-vue /> Vue 3 /
          <span i-logos-unocss /> Uno CSS</span> .
      </p>
      <p>
        import 'some random demo landing pages' from 'anywhere'.<br>
        import 'random inspiration' from 'anywhere' .
      </p>
    </div>
    <div class="back">
      <RouterLink to="/">
        cd ..
      </RouterLink>
    </div>
  </div>
</template>

<style>
.about {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.back a {
  text-decoration: none;
  color: inherit;
  font-family: 'Inter', sans-serif;

  font-size: 1.5rem;
}

.back a:hover {
  text-decoration: underline;
}
</style>
