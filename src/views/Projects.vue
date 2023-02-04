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
      </div>
    </div>

    <div class="recent-projects grid gap-10">
      <div class="mt-10">
        <img src="../assets/project-3.svg" alt="" />
        <div class="mt-4">
          <span class="text-xl font-semibold text-text-color-4"
            >Frontend Portfolio</span
          >
          <div class="mt-3">
            <span class="text-base font-medium text-text-color-3"
              ><span><i class="fa-solid fa-book"></i></span> View Study
              Case</span
            >
            <span class="text-base font-medium text-text-color-3 ml-14"
              ><span><i class="fa-solid fa-eye"></i></span> Preview</span
            >
          </div>
        </div>
      </div>
      <div class="mt-10">
        <img src="../assets/project-4.svg" alt="" />
        <div class="mt-4">
          <span class="text-xl font-semibold text-text-color-4"
            >Frontend Portfolio</span
          >
          <div class="mt-3">
            <span class="text-base font-medium text-text-color-3"
              ><span><i class="fa-solid fa-book"></i></span> View Study
              Case</span
            >
            <span class="text-base font-medium text-text-color-3 ml-14"
              ><span><i class="fa-solid fa-eye"></i></span> Preview</span
            >
          </div>
        </div>
      </div>

      <div class="mt-10">
        <img src="../assets/project-4.svg" alt="" />
        <div class="mt-4">
          <span class="text-xl font-semibold text-text-color-4"
            >Frontend Portfolio</span
          >
          <div class="mt-3">
            <span class="text-base font-medium text-text-color-3"
              ><span><i class="fa-solid fa-book"></i></span> View Study
              Case</span
            >
            <span class="text-base font-medium text-text-color-3 ml-14"
              ><span><i class="fa-solid fa-eye"></i></span> Preview</span
            >
          </div>
        </div>
      </div>

      <div class="mt-10">
        <img src="../assets/project-4.svg" alt="" />
        <div class="mt-4">
          <span class="text-xl font-semibold text-text-color-4"
            >Frontend Portfolio</span
          >
          <div class="mt-3">
            <span class="text-base font-medium text-text-color-3"
              ><span><i class="fa-solid fa-book"></i></span> View Study
              Case</span
            >
            <span class="text-base font-medium text-text-color-3 ml-14"
              ><span><i class="fa-solid fa-eye"></i></span> Preview</span
            >
          </div>
        </div>
      </div>
    </div>

    <div class="section-1 h-52 grid place-items-center mt-36 bg-gold gap-5">
    <span class="self-center pl-32 text-5xl font-semibold text-white"
      >Interested working with me?</span
    >
    <div class="flex gap-7 content-center">
      <button
        v-thover="{ scale: 2.0, border: 1 }"
        @click="sendEmail()"
        class="px-5 py-3 mt-2 rounded-lg font-bold text-text-color-2 bg-white"
      >
        <span><i class="fa-regular fa-envelope"></i></span> Let's do this
      </button>
    </div>
  </div>
  </div>

  <Footer />
</template>

<script setup lang="ts">
import { sendEmail } from "@/functions";
import Footer from "@/components/Footer.vue";
</script>
<style scoped>
:target {
    color: #EEBF63;
    border-bottom: 4px solid #EEBF63;
}
</style>
