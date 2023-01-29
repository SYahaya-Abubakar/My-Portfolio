<template>
  <div class="projects mt-16">
    <span class="text-5xl font-semibold text-text-color-3"
      >My<br />
      Projects</span
    >

    <div class="mt-10">
      <div class="project flex w-7/12 justify-between cursor-pointer">
        <span
          class="target text-4xl pb-3 font-semibold text-text-color dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          >Web Development</span
        >
        <span
          class="target text-4xl pb-3 font-semibold text-text-color dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          >Freebies</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { scrollToTop } from "@/functions";
</script>
<style scoped>
:target {
    color: #EEBF63;
    border-bottom: 4px solid #EEBF63;
}
</style>
