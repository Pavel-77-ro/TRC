<template>
  <div class="gdpr-page">
    <h1>Politica de confidențialitate (GDPR)</h1>

    <section>
      <h2>1. Informații generale</h2>
      <p>
        Turnu Roșu Challenge respectă confidențialitatea datelor tale și se
        angajează să protejeze datele cu caracter personal conform
        Regulamentului (UE) 2016/679 (GDPR).
      </p>
    </section>

    <section>
      <h2>2. Ce date colectăm</h2>
      <p>Putem colecta următoarele date:</p>
      <ul>
        <li>Nume și prenume</li>
        <li>Adresă de email</li>
        <li>Număr de telefon</li>
        <li>Date necesare înscrierii la competiții</li>
      </ul>
    </section>

    <section>
      <h2>3. Scopul colectării datelor</h2>
      <ul>
        <li>Înscrierea și participarea la evenimente</li>
        <li>Comunicare cu participanții</li>
        <li>Respectarea obligațiilor legale</li>
      </ul>
    </section>

    <section>
      <h2>4. Drepturile tale</h2>
      <p>
        Conform GDPR, beneficiezi de următoarele drepturi:
      </p>
      <ul>
        <li>Dreptul de acces la date</li>
        <li>Dreptul la rectificare</li>
        <li>Dreptul la ștergerea datelor</li>
        <li>Dreptul la restricționarea prelucrării</li>
        <li>Dreptul la portabilitatea datelor</li>
        <li>Dreptul de opoziție</li>
      </ul>
    </section>

    <section>
      <h2>6. Contact</h2>
      <p>
        Pentru orice solicitare legată de datele tale personale, ne poți
        contacta la adresa:
        <strong>contact@turnurosuchallenge.ro</strong>
      </p>
      <br>
      <p>
        Aveți dreptul să depuneți plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP).
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "GDPR",
};
</script>

<style scoped>
.gdpr-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
  line-height: 1.7;
}

h1 {
  margin-bottom: 2rem;
}

section {
  margin-bottom: 1.8rem;
}

ul {
  padding-left: 1.5rem;
}
</style>
