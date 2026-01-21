<template>
  <div class="sportic-form-container w-full">
    <iframe
      :id="iframeId"
      class="sportic-widget w-full"
      :src="iframeSrc"
      sandbox="allow-top-navigation allow-scripts allow-popups allow-forms allow-same-origin allow-modals"
      style="width: 100%; overflow-x: hidden; border: 0; height: 1500px;"
    ></iframe>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

// Props pentru reutilizare
const props = defineProps({
  iframeSrc: {
    type: String,
    required: true
  },
  iframeId: {
    type: String,
    default: "sportic-race-form"
  },
  scriptSrc: {
    type: String,
    default: "https://register.42km.ro/embed/embed.js"
  }
});

onMounted(() => {
  // Injectăm scriptul doar o dată
  if (!document.getElementById("sportic-form-script")) {
    const script = document.createElement("script");
    script.id = "sportic-form-script";
    script.src = props.scriptSrc;
    script.async = true;
    document.body.appendChild(script);
  }

  // Auto-height optional (poate fi folosit dacă vrei)
  const iframe = document.getElementById(props.iframeId);
  iframe.onload = function () {
    try {
      this.style.height =
        this.contentWindow.document.body.scrollHeight + "px";
    } catch (e) {
      console.warn("Unable to resize Sportic form iframe:", e);
    }
  };
});
</script>

<style scoped>
.sportic-form-container {
  margin-top: 2rem;
}
</style>
