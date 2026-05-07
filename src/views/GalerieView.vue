<template>
  <div class="galerie-container">
    <iframe
      v-if="isVisible"
      id="MemzoInt"
      src="https://memzo.ai/integrate/N0VLb1MvUDluaFV1T29VK1FnMHY1dz09"
      style="border: none; width: 100%; min-height: 720px; overflow-y: hidden; overflow: hidden"
      title="Get Your Photos"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'GalerieView',
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.isVisible = true;
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(this.$el);
  },
};
</script>

