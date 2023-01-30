<template>
  <div class="main flex flex-col"><tetikus showDefaultCursor="true" size="30" color="#000000" contentPosition="right"/>
  <Navbar @toggleDark="toggleDark()" />
  </div>
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({
  selector: "body", //element to add attribute to
  attribute: "theme", // attribute name
  valueDark: "custom-dark", // attribute value for dark mode
  valueLight: "custom-light", // attribute value for light mode
});
const toggleDark = useToggle(isDark);
</script>

<style>
* {
  /* outline: 1px solid black; */
}
body {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
}

[theme="custom-dark"] {
  background: #16171d;
  color: #fff;
}

[theme="custom-light"] {
  background: #f1f1f1;
  color: #16171d;
}
</style>
