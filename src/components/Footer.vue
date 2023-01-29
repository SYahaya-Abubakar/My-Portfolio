<template lang="">
  <footer class="footer flex items-center justify-around">
    <span class="text-4xl font-semibold text-text-color-2">Let's Connect</span>
    <div class="flex gap-5">
      <span><i class="fa-brands fa-linkedin-in fa-2xl"></i></span>
      <span><i class="fa-brands fa-github fa-2xl"></i></span>
      <span><i class="fa-brands fa-twitter fa-2xl"></i></span>
    </div>
    <span
      @click="scrollToTop()"
      class="text-2xl font-medium cursor-pointer text-text-color-2"
      >Back to Top <span><i class="fa-solid fa-arrow-up"></i></span
    ></span>
  </footer>
</template>

<script setup lang="ts">
import { scrollToTop } from '@/functions';
</script>

<style>
footer {
  width: 100%;
  height: 164px;
}
</style>
