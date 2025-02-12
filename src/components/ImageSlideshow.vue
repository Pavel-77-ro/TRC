<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const images = [
  "/assets/images/TR_Challenge_2004.jpg",
  "/assets/images/2023poza1.jpeg",
];

const modules = [Pagination, Autoplay];
</script>

<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    :pagination="{ clickable: true }"
    class="w-full max-w-[800px] rounded-xl shadow-lg"
  >
    <swiper-slide v-for="(image, index) in images" :key="index">
      <img :src="image" alt="Slide Image" class="w-full h-[400px] object-cover rounded-xl" />
    </swiper-slide>
  </swiper>
</template>

<style scoped>
.swiper-pagination-bullet {
  background: #cc1812;
}
</style>
