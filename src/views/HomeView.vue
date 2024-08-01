<script setup>
import { RouterView } from 'vue-router';
import { useRouter } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';

const router = useRouter();

function goToInscrieri() {
  window.location.href = "https://racehub.ro/register/trc2024";
}

function goToCurse() {
  router.push({ name: 'curse' });
}

let faqItems = [
  {
    question: 'De ce aş participa la Turnu Roşu Challenge?',
    answer:
      'Pentru că e șansa ta să te bucuri de peisaje superbe, să-ți depășești limitele și să te distrezi într-o aventură de neuitat alături de oameni pasionați de natură și sport.'
  },
  {
    question: 'Cât de solicitante sunt traseele?',
    answer:
      'Traseele pregătite pot fi realizate în timpul maxim admis de 5 ore de orice persoană cu o pregătire fizică minimă şi dornică să exploreze zona comunei Turnu Rosu.'
  },
  {
    question: 'Până când mă pot înscrie?',
    answer:
      'Înscrierile la preţul afişat sunt disponibile până pe data de 15 septembrie 2024. Cei ce doresc să se înscrie după data stabilită, va exista o taxă suplimentară.'
  },
  {
    question: 'Unde pot vedea rezultatele?',
    answer:
      'Rezultatele vor fi anunţate la faţa locului, dar si online pe racehub.ro'
  }
];

const participare = [
  {
    icon: 'fa-solid fa-medal',
    text: 'Medalie de participare'
  },
  {
    icon: 'fa-solid fa-hashtag',
    text: 'Numar de concurs'
  },
  {
    icon: 'fa-solid fa-shirt',
    text: 'Tricou (optional) - 80 lei'
  },
  {
    icon: 'fa-solid fa-utensils',
    text: 'Voucher masă'
  },
  {
    icon: 'fa-solid fa-bolt',
    text: 'Baton proteic ROM'
  },
  {
    icon: 'fa-solid fa-percent',
    text: 'Vouchere discount'
  }
];

let activeIndex = ref(null);
function changeActiveIndex(i) {
  activeIndex.value = i;
}

const targetDate = new Date('2024-09-22T09:00:00');
const timeRemaining = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 });

function updateCountdown() {
  const now = new Date();
  const timeDiff = targetDate - now;

  if (timeDiff > 0) {
    timeRemaining.value = {
      days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeDiff % (1000 * 60)) / 1000)
    };
  } else {
    // Time is up
    timeRemaining.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
}

onMounted(() => {
  updateCountdown();
  const interval = setInterval(updateCountdown, 1000);

  onUnmounted(() => {
    clearInterval(interval);
  });
});
</script>

<template>
  <section class="sm:relative lg:overflow-hidden z-10">
    <div
      class="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-6 md:mt-14 lg:mt-[74px]"
    >
      <!-- Content -->
      <div class="flex flex-1 flex-col items-center lg:items-start">
        <h2
          class="text-slate-800 text-3xl sm:text-4xl lg:text-5xl text-center lg:text-left mb-6 font-Lucky"
        >
          Turnu Rosu Challenge
        </h2>
        <p class="text-bookmark-grey text-lg text-center lg:text-left mb-6">
          Înscrie-te la Turnu Roșu Challenge până pe
          <span class="text-orange-400">15 septembrie!</span> Explorează trasee montane uimitoare la
          a doua ediție a evenimentului nostru de alergare și hiking!
        </p>

        <!-- Countdown Timer -->
        <div
          v-if="timeRemaining"
          class="countdown text-center lg:text-left p-4 bg-white rounded-lg w-5/6"
        >
          <div class="flex justify-center gap-4 space-x-4 text-2xl font-semibold">
            <div class="countdown-item flex flex-col items-center">
              <span class="countdown-number text-4xl font-bold text-orange-500">{{
                timeRemaining.days
              }}</span>
              <span class="countdown-label text-gray-700">zile</span>
            </div>
            <div class="countdown-item flex flex-col items-center">
              <span class="countdown-number text-4xl font-bold text-orange-500">{{
                timeRemaining.hours
              }}</span>
              <span class="countdown-label text-gray-700">ore</span>
            </div>
            <div class="countdown-item flex flex-col items-center">
              <span class="countdown-number text-4xl font-bold text-orange-500">{{
                timeRemaining.minutes
              }}</span>
              <span class="countdown-label text-gray-700">minute</span>
            </div>
            <div class="countdown-item flex flex-col items-center">
              <span class="countdown-number text-4xl font-bold text-orange-500">{{
                timeRemaining.seconds
              }}</span>
              <span class="countdown-label text-gray-700">secunde</span>
            </div>
          </div>
        </div>

        <div class="flex justify-center flex-wrap gap-6 font-Lucky w-5/6 tracking-widest">
          <button type="button" class="join-btn" @click="goToInscrieri">Inscrieri</button>
        </div>
      </div>
      <!-- Image -->
      <div class="flex justify-center flex-1 mb-2 md:mb-16 lg:mb-0 -z-10">
        <img
          class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full max-w-[550px]"
          src="../assets/images/mountain.png"
          alt=""
        />
      </div>
    </div>
  </section>

  <!-- Features -->
  <section class="bg-bookmark-white py-20 mt-20 lg:mt-60 lg:overflow-hidden">
    <!-- Heading -->
    <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2 mb-4">
      <h1 class="text-4xl lg:text-5xl text-center text-bookmark-blue font-Lucky">Info</h1>
      <p class="text-center text-bookmark-grey mt-4">
        Turnu Roşu Challenge promite o ediţie şi mai frumoasă decât cea anterioară! Nu rata ocazia
        şi înscrie-te la provocarea oferită de echipa noastră!
      </p>
    </div>
    <!-- Feature #1 -->
    <div class="relative mt-32 lg:mt-32">
      <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-28">
        <!-- Image -->
        <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
          <img
            class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 rounded-full"
            src="../assets/images/2023poza1.jpeg"
            alt=""
          />
        </div>
        <!-- Content -->
        <div class="flex flex-1 flex-col items-center lg:items-start">
          <h1 class="text-3xl md:text-4xl text-bookmark-blue font-Lucky">Curse</h1>
          <p class="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
            Anul acesta avem pregătite doua curse : un cros de 11 km si un semimaraton de 21 km dar
            si o cursă necompetitivă de hiking. La finish vă așteptă un brunch cu produse locale și un gulaș delicios. Apăsaţi
            pe butonul de mai jos pentru informaţii detaliate în legătură cu traseele curente şi
            informaţii suplimentare.
          </p>
          <button
            type="button"
            class="btn text-white bg-gray-900 hover:bg-bookmark-red hover:shadow-xl"
            @click="goToCurse"
          >
            Detalii
          </button>
        </div>
      </div>
      <!-- Rounded Rectangle -->
      <!-- <div
        class="hidden lg:block overflow-hidden bg-bookmark-red rounded-r-full absolute h-80 w-2/4 bottom-0 left-0"
      ></div> -->
    </div>
    <!-- Feature #2 -->
    <div class="relative mt-32 lg:mt-56 bg-white lg:bg-inherit py-8 lg:py-0">
      <div class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
        <!-- Image -->
        <div
          class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 flex flex-1 justify-center z-10 mb-10 lg:mb-0 bg-gray-800 px-2 py-1 md:px-[18px] md:py-4 rounded-[70px]"
        >
          <img
            class="w-5/6 h-5/6 sm:w-full sm:h-full lg:w-full lg:h-full"
            src="../assets/images/tricou-femeie.png"
            alt=""
          />
        </div>
        <!-- Content -->
        <div class="flex flex-1 flex-col items-center lg:items-start">
          <h1 class="text-3xl md:text-4xl text-bookmark-blue font-Lucky">Kit Participare</h1>
          <div class="flex flex-col mt-8 md:mt-[34px] lg:w-full font-semibold">
            <div
              v-for="(kit, index) in participare"
              :key="index"
              class="flex mb-[24px] ml-3 sm:ml-2"
            >
              <div class="w-[30px]">
                <i class="text-red-600 text-2xl align-middle" :class="kit.icon"></i>
              </div>
              <p class="ml-3 text-slate-700 text-lg md:text-xl">{{ kit.text }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Rounded Rectangle -->
      <div
        class="hidden lg:block overflow-hidden bg-gray-800 rounded-l-full absolute h-80 w-2/4 bottom-8 right-0"
      ></div>
    </div>
    <!-- Feature #3 -->
    <div class="relative mt-32 lg:mt-56 mb-10">
      <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-28">
        <!-- Image -->
        <div class="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
          <img
            class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 rounded-full"
            src="../assets/images/2023poza2.jpeg"
            alt=""
          />
        </div>
        <!-- Content -->
        <div class="flex flex-1 flex-col items-center lg:items-start">
          <h1 class="text-3xl md:text-4xl text-bookmark-blue font-Lucky">Detalii organizatorice</h1>
          <p class="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
            Puteți afla mai multe detalii legate de locul de desfășurare al evenimentului și unde ați putea parca dar și programul evenimentului.
          </p>
          <button
            type="button"
            class="btn text-white bg-gray-900 hover:bg-bookmark-red hover:shadow-xl"
          >
            Detalii
          </button>
        </div>
      </div>
      <!-- Rounded Rectangle -->
      <!-- <div
        class="hidden lg:block overflow-hidden bg-bookmark-red rounded-r-full absolute h-80 w-2/4 -bottom-24 -left-36"
      ></div> -->
    </div>
  </section>

  <!-- Download -->
  <section class="py-20 mt-20">
    <!-- Heading -->
    <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
      <h1 class="text-4xl lg:text-5xl text-center text-bookmark-blue font-Lucky">
        Atelier de pictura
      </h1>
      <p class="text-center text-bookmark-grey mt-4">
        Atelierul de pictură revine şi în cadrul celei de a 2-a ediţie a Turu Rosu Challenge.
        Alege-ţi kit-ul care vi se potriveşte!
      </p>
    </div>
    <!-- Cards -->
    <div
      class="px-6 md:px-4 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20 max-w-screen-lg mt-16"
    >
      <!-- Card 1 -->
      <div
        class="flex flex-col rounded-xl shadow-xl hover:shadow-orange-300 hover:scale-98 lg:mb-16 bg-gray-100"
      >
        <div class="p-6 flex flex-col items-center">
          <img class="w-48" src="../assets/images/painter1.png" alt="" />
          <h3 class="mt-5 mb-2 text-bookmark-blue text-lg">Pictură pe șablon</h3>
          <p class="mb-2 text-bookmark-grey font-light">50 RON / persoană</p>
          <p class="mt-5 text-sm text-bookmark-blue text-center">
            Kit-ul conține : Pânză pre-imprimată cu un șablon jucăuș, set de culori vibrante și
            pensula. Recomandat <br />
            pentru copii, fiind necesar doar ca aceștia să umple spațiile pre-imprimate.
          </p>
        </div>
        <hr class="border-b border-bookmark-white" />
        <div class="flex p-6">
          <button
            type="button"
            class="flex-1 btn text-white bg-gray-900 hover:bg-bookmark-white hover:text-black"
          >
            Înscrie-te!
          </button>
        </div>
      </div>
      <!-- Card 2 -->
      <div
        class="flex flex-col rounded-xl shadow-xl hover:shadow-orange-300 hover:scale-98 lg:mb-16 bg-gray-100"
      >
        <div class="p-6 flex flex-col items-center">
          <img class="w-48" src="../assets/images/painter2.png" alt="" />
          <h3 class="mt-5 mb-2 text-bookmark-blue text-lg">Pictură pe numere</h3>
          <p class="mb-2 text-bookmark-grey font-light">125 RON / persoană</p>
          <p class="mt-5 text-sm text-bookmark-blue text-center">
            Kit-ul conține : Pânză pre-imprimată cu un design complex, împărțit în zone numerotate ,
            set de culori numerotate corespunzător zonelor de pe pânză și pensule de diferite
            dimensiuni . Este ușor de urmat pentru toată lumea, iar la final veți crea o operă de
            artă uimitoare .
          </p>
        </div>
        <hr class="border-b border-bookmark-white" />
        <div class="flex p-6">
          <button
            type="button"
            class="flex-1 btn text-white bg-bookmark-purple hover:bg-bookmark-white hover:text-black"
          >
            Înscrie-te!
          </button>
        </div>
      </div>
      <!-- Card 3 -->
      <div
        class="flex flex-col rounded-xl shadow-xl hover:shadow-orange-300 hover:scale-98 lg:mb-16 bg-gray-100"
      >
        <div class="p-6 flex flex-col items-center">
          <img class="w-48" src="../assets/images/painter3.png" alt="" />
          <h3 class="mt-5 mb-2 text-bookmark-blue text-lg">Pictură ghidată</h3>
          <p class="mb-2 text-bookmark-grey font-light">125 RON / persoană</p>
          <p class="mt-5 text-sm text-bookmark-blue text-center">
            Fie că ești atras de delicatețea și transparența acuarelei sau de versatilitatea și intensitatea cernelii acrilică, pictura este o cale minunată de a-ți exprima creativitatea. Lasă-te ghidat de noi și de tehnici consacrate de Fluid-art și Acuarelă și creează o piesă de arta autentică  și unică. 
Îți vom pregăti materiale scrise pe care le poți lua acasă, iar facilitatorul de ateliere îți va exemplifica tehnicile și te va ghida să le utilizezi.
          </p>
        </div>
        <hr class="border-b border-bookmark-white" />
        <div class="flex p-6">
          <button
            type="button"
            class="flex-1 btn text-white bg-gray-900 hover:bg-bookmark-white hover:text-black"
          >
            Înscrie-te!
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="bg-bookmark-white py-20">
    <div class="container">
      <!-- Heading -->
      <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 class="text-3xl text-center text-bookmark-blue font-Lucky">
          Frequently Asked Questions
        </h1>
        <p class="text-center text-bookmark-grey mt-4">
          Aici sunt câteva dintre întrebările puse cel mai frecvent. Dacă aveţi altele pe lângă cele
          prezentate nu ezitaţi să ne contactaţi!
        </p>
      </div>
      <!-- FAQ Items -->
      <div class="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
        <div v-for="(item, index) in faqItems" :key="index" class="">
          <div class="flex items-center border-b py-4">
            <span class="flex-1" :class="{ 'font-semibold': index === activeIndex }">{{
              item.question
            }}</span>
            <i
              @click="changeActiveIndex(index)"
              class="text-bookmark-purple fas fa-chevron-down cursor-pointer"
            ></i>
          </div>
          <p v-show="index == activeIndex" class="grow-1 mb-4 mt-2 text-gray-700">
            {{ item.answer }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20">
    <div class="container flex flex-col items-center">
      <div class="sm:w-3/4 mx-auto px-2">
        <h1 class="text-4xl text-center text-bookmark-blue font-Lucky">Parteneri</h1>
        <p class="text-center text-bookmark-grey mt-4">
          Mulţumim partenerilor noştri pentru implicarea în realizarea, promovarea şi dezvoltarea
          celei de a II-a ediţii a concursului Turnu Roşu Challenge
        </p>
      </div>
      <div class="lg:w-5/6 flex flex-wrap items-center mt-12 lg:mt-14 gap-4 md:gap-[26px]">
        <img
          class="w-[152px] sm:w-40 md:w-48 lg:w-52 cursor-pointer"
          src="../assets/parteneri/logo-alex.webp"
          alt=""
        />
        <img
          class="w-[152px] sm:w-40 md:w-48 lg:w-52 cursor-pointer"
          src="../assets/parteneri/logo-casa.webp"
          alt=""
        />
        <img
          class="w-[152px] sm:w-40 md:w-48 lg:w-52 cursor-pointer"
          src="../assets/parteneri/logo-foto.webp"
          alt=""
        />
        <img
          class="w-[152px] sm:w-40 md:w-48 lg:w-52 cursor-pointer"
          src="../assets/parteneri/logo-gis.png"
          alt=""
        />
        <img
          class="w-[150px] sm:w-40 md:w-48 lg:w-52 cursor-pointer"
          src="../assets/parteneri/logo-gits.webp"
          alt=""
        />
        <img
          class="w-[152px] sm:w-40 md:w-48 lg:w-52 cursor-pointer"
          src="../assets/parteneri/logo-pdt.webp"
          alt=""
        />
        <img
          class="w-[152px] sm:w-20 md:w-24 lg:w-28 lg:h-28 cursor-pointer"
          src="../assets/parteneri/logo-rom.webp"
          alt=""
        />
        <img
          class="w-[152px] sm:w-40 md:w-48"
          src="../assets/parteneri/logo-primarie.webp"
          alt=""
        />
      </div>
    </div>
  </section>

  <RouterView></RouterView>
</template>

<style scoped>
.accordion-content {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease;
}
.accordion-content.show {
  max-height: 150px; /* Adjust to fit your content height */
  opacity: 1;
}

.countdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.countdown-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: #fb923c;
}
.countdown-label {
  font-size: 1rem;
  color: #4b5563;
}
</style>
