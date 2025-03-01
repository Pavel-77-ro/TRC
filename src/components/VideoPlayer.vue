<template>
  <div class="flex justify-center">
    <video 
      class="w-full max-w-[500px] rounded-xl shadow-lg" 
      autoplay 
      loop 
      playsinline 
      controls>
      <source src="/videos/video.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<style scoped>
/* Optional Styling */
video {
  object-fit: cover;
}
</style>