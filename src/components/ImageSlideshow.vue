<script setup>
const videoSource = new URL("@/assets/videos/video.mp4", import.meta.url).href;
</script>

<template>
  <div class="flex justify-center">
    <video 
      class="w-full max-w-[500px] rounded-xl shadow-lg" 
      autoplay 
      loop 
      playsinline 
      controls>
      <source :src="videoSource" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<style scoped>
/* Optional Styling */
video {
  object-fit: cover;
}
</style>