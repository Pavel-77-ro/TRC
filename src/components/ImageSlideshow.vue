<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const images = [
  "src/assets/images/trc1.jpg",
  "src/assets/images/trc2.jpg",
  "src/assets/images/trc3.jpg",
  "src/assets/images/trc4.jpg",
  "src/assets/images/trc5.jpg",
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
    class="w-full max-w-[500px] rounded-xl shadow-lg"
  >
    <swiper-slide v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Slide Image" class="w-[80%] md:w-[500px] h-auto object-cover mx-auto rounded-xl" />
    </swiper-slide>
  </swiper>
</template>

<style scoped>
.swiper-pagination-bullet {
  background: #cc1812;
}
</style>
