<template lang="">
  <div class="home grid mt-20 px-4 mx-auto gap-16">
    <div class="w-fit flex flex-col gap-6">
      <span class="font-medium text-textColor leading-9 text-2xl">Hey!</span>
      <h1 class="name font-semibold text-5xl text-textColor2">
        I’m <span class="text-gold">Sadick Yahaya</span>.<br />
        a Frontend Developer
      </h1>
      <span class="text-lg leading-8 font-normal text-textColor2"
        >Frontend Developer based in Accra, Ghana. I am designing with a minimal
        and beautiful design in mind.</span
      >
      <img src="../assets/line.svg" alt="" />
      <div class="flex items-center gap-3">
        <span class="text-lg leading-8 font-normal text-textColor"
          >Follow me</span
        >
        <div class="flex gap-2">
          <span><i class="fa-brands fa-linkedin-in fa-xl"></i></span>
          <span><i class="fa-brands fa-github fa-xl"></i></span>
          <span><i class="fa-brands fa-twitter fa-xl"></i></span>
        </div>
      </div>
      <div class="flex gap-3 content-center">
        <button class="px-5 py-3 mt-2 rounded-lg font-bold text-white bg-gold">
          <span><i class="fa-regular fa-envelope"></i></span> Mail me
        </button>
        <button
          class="px-5 py-3 mt-2 rounded-lg font-bold border-2 border-gold"
          data-ripple-light="true"
        >
          <span><i class="fa-solid fa-arrow-down"></i></span> Download CV
        </button>
      </div>
    </div>
    <div class="images grid">
      <img class="circle ml-20 mt-16" src="../assets/circle.svg" alt="" />
      <img class="pic z-50" src="../assets/samplePic.svg" alt="" />
      <img class="dots" src="../assets/dots.svg" alt="">
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
.home {
  margin: 0 auto;
  grid-template-columns: 50% 50%;
  font-family: "Poppins", sans-serif;
  width: 63.5vw;
}

.name {
  line-height: 62px;
}

.circle, .pic, .dots {
  grid-column: 1;
  grid-row: 1;
}
/* .pic {
  position: absolute;
  width: 540px;
  height: 540px;
  right: 300px;
  top: 137px;
} */
</style>
