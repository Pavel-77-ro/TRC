<script setup>
import { db } from '../firebase.js';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { ref } from 'vue';

// References to form elements
const nume = ref('');
const prenume = ref('');
const localitate = ref('');
const tipOptiune = ref('');
const email = ref('');
const telefon = ref('');
const errorMessage = ref('');

// Function to handle form submission
async function inscriereParticipantPictura() {
  const emailValue = email.value;

  if (!emailValue) {
    errorMessage.value = 'Emailul este necesar.';
    return;
  }

  const docRef = doc(db, 'participanti_pictura', emailValue);

  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      errorMessage.value = 'Un participant cu acest email există deja.';
    } else {
      await setDoc(docRef, {
        nume: nume.value,
        prenume: prenume.value,
        localitate: localitate.value,
        optiune: tipOptiune.value,
        email: email.value,
        telefon: telefon.value,
        confirmat: 'Nu',
      });
      console.log('Document successfully written!');
      errorMessage.value = ''; // Clear any previous error message
      window.location.reload();
    }
  } catch (error) {
    console.error('Error writing document: ', error);
    errorMessage.value = 'A apărut o eroare la înscriere.';
  }
}

</script>

<template>
  <div
    class="sm:w-3/4 lg:w-8/12 mx-auto px-3 container mt-16 mb-20 lg:mb-40 font-Poppins flex justify-center items-center"
  >
    <div class="w-[90%] sm:w-3/4 mx-auto bg-gray-700 p-6 rounded-3xl shadow-lg">
      <h1 class="text-2xl md:text-3xl font-bold mb-6 mt-3 pt-1 md:pt-4 text-center text-gray-100">
        Formular de înscriere
      </h1>
      <form class="py-8 px-1 sm:px-5 lg:px-10" @submit.prevent="inscriereParticipantPictura">
        <div class="mb-6">
          <label for="nume" class="block text-white font-semibold mb-2">Nume</label>
          <input
            v-model="nume"
            type="text"
            id="nume"
            name="nume"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-bookmark-red"
            required
          />
        </div>

        <div class="mb-6">
          <label for="prenume" class="block text-white font-semibold mb-2">Prenume</label>
          <input
            v-model="prenume"
            type="text"
            id="prenume"
            name="prenume"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-bookmark-red"
            required
          />
        </div>
        <div class="mb-6">
          <label for="localitate" class="block text-white font-semibold mb-2">Localitate</label>
          <input
            v-model="localitate"
            type="text"
            id="localitate"
            name="localitate"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-bookmark-red"
            required
          />
        </div>

        <div class="mb-6">
          <label for="optiune" class="block text-white font-semibold mb-2">Optiune</label>
          <select
            v-model="tipOptiune"
            id="optiune"
            name="optiune"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-bookmark-red"
            required
          >
            <option value="Pictură pe șablon">Pictură pe șablon</option>
            <option value="Pictură pe numere">Pictură pe numere</option>
            <option value="Pictură ghidată">Pictură ghidată</option>
          </select>
        </div>

        <div class="mb-6">
          <label for="email" class="block text-white font-semibold mb-2">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            name="email"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-bookmark-red"
            required
          />
        </div>

        <div class="mb-6">
          <label for="telefon" class="block text-white font-semibold mb-2">Număr de telefon</label>
          <input
            v-model="telefon"
            type="tel"
            id="telefon"
            name="telefon"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-bookmark-red"
            required
          />
        </div>

        <div class="mb-6">
          <div class="flex items-start">
            <input
              type="checkbox"
              id="checkbox1"
              name="checkbox1"
              class="h-4 w-4 text-orange-600 focus:ring-bookmark-red border-gray-300 rounded mt-2c red"
              required
            />
            <label for="checkbox1" class="ml-2 block text-white"
              >Sunt de acord cu utilizarea de către organizator, precum și de către partenerii și
              sponsorii săi, a numelui meu, a fotografiilor/înregistrărilor audio/video și a
              declarațiilor mele, în scopuri de marketing sau activități promoționale în sprijinul
              organizațiilor sau cooperative. Sunt de acord că fotografiile și înregistrările
              audio/video în care sunt implicat sunt și vor fi proprietatea exclusivă a
              organizatorului, care poate decide cum să le utilizeze.</label
            >
          </div>
          <div class="flex items-start mt-6">
            <input
              type="checkbox"
              id="checkbox2"
              name="checkbox2"
              class="h-4 w-4 text-blue-600 focus:ring-bookmark-red border-gray-300 rounded mt-2 red"
              required
            />
            <label for="checkbox2" class="ml-2 block text-white"
              >Sunt de acord ca organizatorul să colecteze și să prelucreze datele mele personale
              (nume, prenume, e-mail) conform „Regulamentului (UE) 2016/679 privind protecția
              persoanelor fizice în ceea ce privește prelucrarea datelor cu caracter personal și
              privind libera circulație a acestor date”, precum si asupra faptului ca datele
              furnizate vor fi tratate confidențial, vor fi protejate, nu vor fi transmise catre
              nicio terta parte decat in temei legal.</label
            >
          </div>
        </div>

        <div v-if="errorMessage" class="text-red-500 text-center mb-4">{{ errorMessage }}</div>

        <div class="mt-12 text-center">
          <button
            type="submit"
            class="w-5/6 bg-orange-500 text-white px-3 py-2 rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Înregistrează-te
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.red {
  accent-color: rgb(243, 66, 66);
}
</style>
