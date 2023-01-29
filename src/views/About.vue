<template>
  <div class="section-1 mt-16 grid gap-5">
    <img class="pic1" src="../assets/section-1-img.svg" alt="" />
    <div class="flex flex-col gap-5">
      <div>
        <span class="block text-5xl text-text-color-2 font-semibold"
          >Sadick Yahaya</span
        >
        <span class="text-xl font-normal">a Frontend Developer</span>
      </div>

      <span class="text-lg leading-8 font-normal text-text-color-2"
        >Frontend Developer based in Accra, Ghana.<br />
        I am designing with a minimal and beautiful design in mind.</span
      >
      <div>
        <span class="block text-xl font-normal">Email me</span>
        <span class="text-xl font-bold">sadickashton@gmail.com</span>
      </div>

      <div class="text-xl">
        <img src="../assets/signature.svg" alt="" />
      </div>

      <div>
        <span class="text-xl font-semibold">Tools & Skills</span>
        <div class="mt-5 text-6xl flex gap-6">
          <span><i class="devicon-react-original colored"></i></span>
          <span><i class="devicon-vuejs-plain colored"></i></span>
          <span><i class="devicon-typescript-plain colored"></i></span>
          <span
            ><i class="devicon-tailwindcss-original-wordmark colored"></i
          ></span>
        </div>
      </div>
    </div>
  </div>

  <div class="about-section-1 mt-16 border-t-2 border-about-page-border pt-10">
    <span class="text-lg leading-8 font-normal text-black text-justify"
      >My most recent work stint was with Sprinklr where I designed for some of
      its core offerings like Social Media Engagement, Social Advertising, Care
      support and Analytics for big brands with a global reach that helped
      integrate all their social marketing needs under one roof. Having led the
      design team for four years in this young, rapidly growing enterprise
      startup environment - taught me how to balance business goals and
      engineering constraints as I unrelentingly advocated for the user.</span
    >

    <img class="about-pic my-10" src="../assets/hero-devices.svg" alt="" />

    <span class="mt-10 text-lg leading-8 font-normal text-black text-justify">
      I graduated from Symbiosis Institute of Design, India with a degree in
      User Experience Design. I loved the human-centered design methods and
      processes I learned in school and applied them to my thesis project with
      Microsoft R&D, Hyderabad I grew up in 7 different states in India and my
      ability to quickly adjust to new challenges in life comes from that. Owing
      to my diverse upbringing, I embrace all cultures and try to bring it to
      the designs I create. I am a movie buff and there’s nothing like relaxing
      to a good masala Bollywood movie. Food is my second love and I let my nose
      guide me to the pleasures of the stomach once every weekend.</span
    >
<div class="border-b-2 border-about-page-border pb-24">
    <img class="about-pic my-10" src="../assets/how-i-work.svg" alt="" />
</div>
  </div>

  <div class="section-4 bg-about-page-map mt-36"></div>

    <footer class="footer flex items-center justify-around">
      <span class="text-4xl font-semibold text-text-color-2"
        >Let's Connect</span
      >
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
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style>
.about-pic {
  margin: 0 auto;
  width: 63.5vw;
  height: auto;
}
</style>
