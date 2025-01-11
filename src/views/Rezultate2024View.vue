<script setup>
import { db } from '../firebase.js';
import { getDocs, collection } from 'firebase/firestore';
import { ref, onMounted } from 'vue';

</script>

<template>
  <div>
    <br>
     <!-- Embedded participant list -->
    <iframe style="overflow: hidden;" src="https://racehub.ro/results/g-live.html?f=events/timing/20240922/turnurosuchallenge.clax" width="100%" height="3100px" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  name: 'Rezultate 2024'
}
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
