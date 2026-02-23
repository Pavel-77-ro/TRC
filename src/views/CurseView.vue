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
  </div>
  <div class="flex w-full md:w-5/6 px-8 md:px-5 justify-between flex-wrap mx-auto py-6 gap-12 sm:gap-6 my-12">
  
  <!-- Semimaraton Strava Embed + GPX Button -->
    <div class="w-full md:w-5/12 flex flex-col items-center gap-3">
    <p class="font-Lucky text-lg">🏃‍♂️ Semimaraton – 21 km</p>
    <ul class="list-none mt-2 space-y-1">
      <li>🧃💧 km 6  – punct de alimentare și hidratare</li>
      <li>💧 km 14 – punct de hidratare</li>
      <li>🧃💧 km 19 – punct de alimentare și hidratare</li>
    </ul>
    <div class="strava-embed-placeholder"
       data-embed-type="route"
       data-embed-id="3461073468052483520"
       data-units="metric"
       data-full-width="true"
       data-style="standard"
       data-terrain="3d"
       data-map-hash="10.44/45.6106/24.3467"
       data-club-id="1338252"
       data-from-embed="true"
    ></div>
    
    <!-- Download GPX Button -->
    <button onclick="window.location.href='../public/strava/Semimaraton-TRC-2026.gpx';"
      class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 mt-4">
      Download GPX
    </button>
  </div>

  <!-- Cros Strava Embed + GPX Button -->
  <div class="w-full md:w-5/12 flex flex-col items-center gap-3">
    <p class="font-Lucky text-lg text-center">🏃 Cros – 11 km</p>
    <ul class="list-none mt-2 space-y-1">
      <li>💧 km 4.6 – punct de hidratare</li>
      <li>🧃💧 km 9.3 – punct de alimentare și hidratare</li>
    </ul>
    <div
      class="strava-embed-placeholder"
      data-embed-type="route"
      data-embed-id="3251197710336262238"
      data-units="metric"
      data-full-width="true"
      data-style="standard"
      data-terrain="3d"
      data-map-hash="11.28/45.6197/24.3106"
      data-club-id="1338252"
      data-from-embed="true"
    ></div>

    <!-- Download GPX Button -->
    <button onclick="window.location.href='../public/strava/TRC-cros.gpx';"
      class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 mt-4">
      Download GPX
    </button>
  </div>

</div>
</template>
