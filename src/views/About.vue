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
      >As a Junior Front-End Developer with 2 years of experience, I specialize
      in building user-friendly and responsive web applications using Vue.js,
      React.js and TypeScript. My strong understanding of front-end
      technologies, including HTML, CSS, and JavaScript, allows me to develop
      high-quality and visually appealing websites that meet the needs of both
      the client and the end-user.</span
    >

    <img class="about-pic my-10" src="../assets/hero-devices.svg" alt="" />

    <span class="block mt-10 mb-10 text-lg leading-8 font-normal text-black text-justify">
      I have experience in working in Agile environment and have been able to
      deliver projects on time. I am always eager to learn and stay up-to-date
      with the latest front-end technologies and trends. I am a team player and
      I enjoy collaborating with other developers, designers, and stakeholders
      to create beautiful and functional websites.</span
    >

    <span class="text-lg leading-8 font-normal text-black text-justify">
      I am looking for a new opportunity to utilize my skills and experience to
      contribute to a dynamic and innovative team. If you're looking for a
      Junior Front-End Developer with Vue.js and TypeScript experience, please
      don't hesitate to contact me.</span
    >

    <div class="border-b-2 border-about-page-border pb-24">
      <img class="about-pic my-10" src="../assets/how-i-work.svg" alt="" />
    </div>
  </div>

  <div class="section-4 bg-about-page-map mt-36"></div>

  <Footer />
</template>

<script setup lang="ts">
import Footer from "@/components/Footer.vue";
</script>

<style>
.about-pic {
  margin: 0 auto;
  width: 63.5vw;
  height: auto;
}
</style>
