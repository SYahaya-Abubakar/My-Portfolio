<template>
  <div class="home grid mt-16 px-4 mx-auto gap-16">
    <div class="flex flex-col gap-6">
      <span class="font-medium text-text-color leading-9 text-2xl">Hey!</span>
      <h1 class="name font-semibold text-5xl text-text-color-">
        I’m <span class="text-gold">Sadick Yahaya</span>.<br />
        a Frontend Developer
      </h1>
      <span class="text-lg leading-8 font-normal text-text-color2"
        >Frontend Developer based in Accra, Ghana. I am designing with a minimal
        and beautiful design in mind.</span
      >
      <img src="../assets/line.svg" alt="" />
      <div class="flex items-center gap-3">
        <span class="text-lg leading-8 font-normal text-text-color"
          >Follow me</span
        >
        <div class="flex gap-2">
          <span><i class="fa-brands fa-linkedin-in fa-xl"></i></span>
          <span><i class="fa-brands fa-github fa-xl"></i></span>
          <span><i class="fa-brands fa-twitter fa-xl"></i></span>
        </div>
      </div>
      <div class="flex gap-3 content-center">
        <button
          v-thover="{ scale: 2.0, border: 1 }"
          @click="sendEmail()"
          class="px-5 py-3 mt-2 rounded-lg font-bold text-white bg-gold"
        >
          <span><i class="fa-regular fa-envelope"></i></span> Mail me
        </button>
        <a href="../files/Yahaya Sadick Abubakar - Resume.pdf" download
          ><button
            class="px-5 py-3 mt-2 rounded-lg font-bold border-2 border-gold"
            data-ripple-light="true"
          >
            <span><i class="fa-solid fa-arrow-down"></i></span> Download CV
          </button></a
        >
      </div>
    </div>
    <div class="images grid">
      <img class="circle ml-7" src="../assets/circle.svg" alt="" />
      <img class="pic z-50 rounded-full ml-7" src="../assets/pic.png" alt="" />
      <img class="dots" src="../assets/dots.svg" alt="" />
    </div>
  </div>

  <div class="section-1 grid mt-36 bg-section-1-bg gap-5">
    <div class="section-1-img flex items-center justify-center">
      <img class="pic-1" src="../assets/mf-avatar.svg" alt="" />
    </div>
    <div class="flex flex-col px-8 py-11 gap-20">
      <div class="flex items-end gap-12">
        <div class="flex flex-col">
          <span
            class="flex items-center text-7xl text-text-color-2 font-semibold"
            >10<span class="text-plus-color text-5xl font-semibold"
              ><i class="fa-solid fa-plus"></i></span
          ></span>
          <span class="text-2xl leading-8 font-normal text-text-color"
            >Completed Projects</span
          >
        </div>
        <div class="flex flex-col gap-3">
          <span
            class="flex items-center text-5xl text-text-color-2 font-semibold"
            >A<span class="text-3xl font-semibold"
              ><i class="fa-solid fa-plus"></i></span
            ><span class="text-gold text-4xl"
              ><i class="fa-solid fa-star fa-2xs"></i
              ><i class="fa-solid fa-star fa-2xs"></i
              ><i class="fa-solid fa-star fa-2xs"></i
              ><i class="fa-solid fa-star fa-2xs"></i
              ><i class="fa-solid fa-star-half-stroke fa-2xs"></i></span
          ></span>
          <span
            class="text-2xl leading-8 font-normal mb-0 justify-self-end text-text-color"
            >Positive Reviews</span
          >
        </div>
      </div>
      <div class="flex flex-col gap-5">
        <span class="text-5xl font-semibold text-text-color-3"
          >Glad to Work with You!</span
        >
        <span class="text-xl font-normal w-10/12"
          >As a frontend developer, I work closely <br />
          with my clients to define, design and develop <br />
          transformable user experiences across all <br />
          platforms and brand’s touchpoints.</span
        >
      </div>
    </div>
  </div>

  <div class="flex flex-col gap-14 section-2 mt-36">
    <div class="flex justify-between items-center">
      <span class="text-5xl font-semibold text-text-color-3"
        >Recent Projects</span
      >
      <button
        v-thover="{ scale: 2.0, color: 'transparent' }"
        @click="$router.push('/projects')"
        class="px-5 py-3 mt-2 rounded-lg font-bold text-white bg-gold"
      >
        View More
      </button>
    </div>

    <div class="recent-projects flex justify-around">
      <div class="">
        <img src="../assets/project-1.svg" alt="" />
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
      <div>
        <img src="../assets/project-2.svg" alt="" />
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
  </div>

  <div class="section-1 h-80 grid place-items-center mt-36 bg-gold gap-5">
    <span class="self-center pl-32 text-5xl font-semibold text-white"
      >Interested working with me?</span
    >
    <div class="flex gap-7 content-center">
      <button
        @click="sendEmail()"
        class="px-5 py-3 mt-2 rounded-lg font-bold text-text-color-2 bg-white"
      >
        <span><i class="fa-regular fa-envelope"></i></span> Let's do this
      </button>
      <button
        @click="$router.push('/projects')"
        class="px-5 py-3 mt-2 rounded-lg font-bold border-2 text-white border-white"
        data-ripple-light="true"
      >
        See More Projects
      </button>
    </div>
  </div>
  <div class="section-4 bg-section-4-bg mt-36"></div>
  <Footer />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { sendEmail } from "@/functions";
import Footer from "@/components/Footer.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.home,
.about,
.navbar,
.section-1,
.about-section-1,
.section-2,
.heading,
.projects {
  width: 63.5vw;
  margin: 0 auto;
}

.home {
  grid-template-columns: 50% 50%;
}

.pic {
  width: 27rem;
  height: 30rem;
}

.name {
  line-height: 62px;
}

.circle,
.pic,
.dots {
  grid-column: 1;
  grid-row: 1;
}

/* section 1 styles */
.section-1 {
  grid-template-columns: 35% 65%;
  height: 33.25rem;
  border-radius: 30px;
}

/* .pic-1 {
  width: 18rem;
  height: 28rem;
  border-radius: 30px;
} */

/* section-2 styles */
.recent-projects {
  grid-template-columns: 50% 50%;
}

/* section-4 styles */
.section-4 {
  width: 100%;
  height: 500px;
}
</style>
