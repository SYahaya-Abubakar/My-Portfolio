<template>
  <div class="main flex flex-col"><Navbar @toggleDark="toggleDark()" /></div>
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
  /* 1!! */
  margin: 0;
  padding: 0;
}

[theme="custom-dark"] {
  background: #16171d;
  color: #fff;
}

[theme="custom-light"] {
  background: #E1E1E1;
  color: #16171d;
}
</style>
