<template lang="">
  <!-- component -->
  <div class="navbar">
    <div class="bg-gray-100 dark-mode:bg-gray-900">
      <div
        class="w-full text-gray-700 dark-mode:text-gray-200 dark-mode:bg-gray-800"
      >
        <div
          x-data="{ open: true }"
          class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
        >
          <div class="flex flex-row items-center justify-between p-4">
            <a
              href="#"
              class="text-2xl font-bold leading-8 tracking-widest text-gray-900 capitalize rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
              >Sadick Yahaya</a
            >
            <!-- <button class="rounded-lg md:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
          <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
            <path x-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            <path x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
        </button> -->
          </div>
          <nav
            :class="{ flex: open, hidden: !open }"
            class="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row items-center"
          >
            <router-link
              to="/"
              class="px-4 py-2 mt-2 text-base font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gold focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >Home</router-link
            >
            <router-link
              to="/about"
              class="px-4 py-2 mt-2 text-base font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gold focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >About</router-link
            >
            <router-link
              to="/projects"
              class="px-4 py-2 mt-2 text-base font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gold focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >Project</router-link
            >
            <router-link
              to="/contact"
              class="px-4 py-2 mt-2 text-base font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gold focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >Contact</router-link
            >
            <div>
              <div
                class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in ml-8 cursor-pointer"
              >
                <input
                  type="checkbox"
                  @change="$emit('toggleDark')"
                  name="toggle"
                  id="toggle"
                  class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                />
                <label
                  for="toggle"
                  class="toggle-label block overflow-hidden h-6 rounded-full bg-white cursor-pointer"
                ></label>
              </div>
              <span class="cursor-pointer"
                ><i class="fa-solid fa-sun"></i>
              </span>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
</script>

<style>
.toggle-checkbox:checked {
  @apply: right-0 border-green-400;
  right: 0;
  border-color: #68d391;
}
.toggle-checkbox:checked + .toggle-label {
  @apply: bg-green-400;
  background-color: #68d391;
}
</style>
