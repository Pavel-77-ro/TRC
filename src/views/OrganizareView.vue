<template>
  <div class="container mx-auto px-4 py-10 max-w-4xl text-slate-700 leading-relaxed">
    <h1 class="text-3xl font-semibold mb-8">Contact</h1>

    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-2">Organizator</h2>
      <p>
        Evenimentul <strong>Turnu Roșu Challenge</strong> este organizat de:
      </p>
      <ul class="list-disc pl-6 mt-2">
        <li><strong>Club Sportiv Montan Sibiu (CSMS)</strong></li>
        <li>Formă juridică: Asociație sportivă</li>
        <li>Sediu: Sibiu, str. Poet Grigore Alexandrescu, nr. 4, ap. 2, jud. Sibiu, România</li>
        <li>C.I.F.: 49461007</li>
        <li>Cont bancar: RO30BTRLRONCRT0682061601 – Banca Transilvania</li>
        <li>Reprezentant legal: Președinte Morariu Razvan</li>
        <li>Telefon: 0799.312.072</li>
        <li>Email: <a href="mailto:contact@urmepeplay.ro" class="text-purple-600 underline">contact@urmepeplay.ro</a></li>
        <li>Website: <a href="https://clubmontan.ro" target="_blank" class="text-purple-600 underline">www.clubmontan.ro</a></li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-2">Coorganizator</h2>
      <p>
        Organizarea evenimentului este realizată în colaborare cu:
      </p>
      <ul class="list-disc pl-6 mt-2">
        <li><strong>Turnu Roșu Challenge</strong></li>
        <li>Formă juridică: Costeiu Iulian Alexandru PFA</li>
        <li>Sediu: Turnu Rosu, nr. 527, jud. Sibiu, România</li>
        <li>C.I.F.: 42910524</li>
        <li>Cont bancar: RO49INGB0000999910617261 – ING</li>
        <li>Reprezentant legal: Costeiu Iulian Alexandru</li>
        <li>Telefon: 0742.996.598</li>
        <li>Email: <a href="mailto:contact@turnurosuchallenge.ro" class="text-purple-600 underline">contact@turnurosuchallenge.ro</a></li>
        <li>Website: <a href="https://www.turnurosuchallenge.ro" class="text-purple-600 underline">www.turnurosuchallenge.ro</a></li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-2">Date de contact</h2>
      <p>
        Pentru orice informații legate de eveniment, înscrieri, rezultate sau
        aspecte organizatorice, ne poți contacta folosind datele de mai jos:
      </p>
      <ul class="list-disc pl-6 mt-2">
        <li>Email general: <a href="mailto:contact@turnurosuchallenge.ro" class="text-purple-600 underline">contact@turnurosuchallenge.ro</a></li>
        <li>Email organizator: <a href="mailto:contact@urmepeplay.ro" class="text-purple-600 underline">contact@urmepeplay.ro</a></li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-2">Responsabilitate</h2>
      <p>
        Organizatorii depun toate eforturile pentru a asigura corectitudinea
        informațiilor publicate pe acest website. Cu toate acestea, își rezervă
        dreptul de a modifica conținutul site-ului, programul evenimentului sau
        regulamentul, atunci când situația o impune, cu informarea prealabilă a
        participanților.
      </p>
    </section>

    <section>
      <h2 class="text-xl font-semibold mb-2">Protecția datelor</h2>
      <p>
        Pentru informații detaliate privind prelucrarea datelor cu caracter
        personal, te rugăm să consulți pagina
        <RouterLink
          :to="{ name: 'GDPR' }"
          class="text-purple-600 underline"
        >
          Politica de confidențialitate (GDPR)
        </RouterLink>.
      </p>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
