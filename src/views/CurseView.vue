<script setup>
import { onMounted } from 'vue';

function loadStravaScript() {
  return new Promise((resolve, reject) => {
    if (document.getElementById('strava-embed-script')) {
      return resolve(); // Script already loaded
    }
    const script = document.createElement('script');
    script.id = 'strava-embed-script';
    script.src = 'https://strava-embeds.com/embed.js';
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

onMounted(async () => {
  try {
    await loadStravaScript();
    if (window.StravaEmbed) {
      window.StravaEmbed.init();
    }
  } catch (error) {
    console.error('Failed to load Strava embed script', error);
  }
});
</script>

<template>
  <div class="sm:w-3/4 lg:w-6/12 mx-auto px-3 container mt-16 font-Poppins mb-10">
    <h1 class="text-4xl md:text-5xl text-center text-gray-800 font-Lucky">Curse</h1>
    <p class="text-center text-gray-700 mt-6 mb-4">
      Anul acesta am pregătit 3 tipuri de trasee, comparativ cu doar 2 în ediţia anterioară. Prima
      cursă, şi cea mai provocatoare, va consta într-un semi-maraton de 21 km. Un pas mai jos este
      traseul de cross, ce la acestă ediţie va măsura 11 km. Iar în final, un traseu necompetiţional
      de hike cu o lungime de 4 km.
    </p>
  </div>
  <div
    class="flex w-full md:w-5/6 px-8 md:px-5 justify-between flex-wrap mx-auto py-6 gap-12 sm:gap-6 my-12"
  >
    <div class="w-full md:w-5/12 flex flex-col items-center gap-3">
      <div
        class="strava-embed-placeholder"
        data-embed-type="route"
        data-embed-id="3251199003475310568"
        data-units="metric"
        data-style="standard"
        data-map-hash="11.03/45.6101/24.335"
        data-from-embed="true"
      ></div>
      <a href="../assets/strava/TRC-cros.gpx">Download</a>
    </div>
    <div class="w-full md:w-5/12 flex justify-center">
      <div
        class="strava-embed-placeholder"
        data-embed-type="route"
        data-embed-id="3251197710336262238"
        data-full-width="true"
        data-style="standard"
        data-map-hash="11.67/45.6197/24.3106"
        data-from-embed="true"
      ></div>
    </div>
  </div>
</template>
