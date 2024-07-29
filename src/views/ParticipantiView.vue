<script setup>
import { db } from '../firebase.js';
import { getDocs, collection } from 'firebase/firestore';
import { ref, onMounted } from 'vue';

</script>

<template>
  <div>
    <br>
     <!-- Embedded participant list -->
    <iframe style="overflow: hidden;" src="https://racehub.ro/register/trc2024/list?language=ro-RO" width="100%" height="3100px" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  name: 'Participanti'
}
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
