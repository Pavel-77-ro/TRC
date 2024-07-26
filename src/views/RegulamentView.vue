<script setup>
const info1 = [
  {
    title: '1. Caracteristici ale competiției',
    content:
      'Turnu Roșu Challenge este o competiție de alergare cu caracter submontan. Traseul se desfășoară pe poteci marcate în Turnu Roșu și pe dealurile de la poalele munților Făgăraș fiind poarta de intrare spre Munții Făgăraș. Suprafața de alergare a traseelor este formată din: drum forestier, în marea majoritate poteci naturale și pășuni, adică iarbă și pământ. Vârsta minimă pentru înscriere este 18 ani la cursele de Cros și Semimaraton. Toți participanții sunt obligați să completeze formularul de înscriere online și declarația pe proprie răspundere, care atestă luarea la cunoștință a condițiilor și regulilor competiției. Formatul Power Hiking este unul nou, se încurajează participarea oamenilor care vor să parcurgă un traseu într-un ritm mai susținut sau mai lejer,competiția fiind necronometrată'
  },
];
</script>
<template>
  <div class="sm:w-3/4 lg:w-6/12 mx-auto px-3 container mt-16 font-Poppins mb-10">
    <h1 class="text-4xl md:text-5xl text-center text-gray-800 font-Lucky">Regulament</h1>
    <p class="text-center text-gray-700 mt-6 mb-4">
      Acest regulament se aplică participanților la concursul “Turnu Roșu
      Challenge”. Evenimentul va avea loc în Comuna Turnu Roșu, jud. Sibiu, locul de desfășurare al
      evenimentului fiind spațiul din apropierea Mănăstirii Turnu Roșu.
    </p>
    <section class="p-1" v-for="(item, index) in info1" :key="index">
      <h2 class="text-xl md:text-2xl mt-10 text-gray-700 font-semibold">{{ item.title }}</h2>
      <p class="text-gray-700 p-1 mt-3 mb-3">{{ item.content }}</p>
    </section>
    <section class="p-1">
      <h2 class="text-xl md:text-2xl mt-10 text-gray-700 font-semibold"> 2. Obligațiile participanților </h2>
      <div
        class="text-gray-700 p-1 mt-5 mb-3">
        Participarea la “ Turnu Roșu Challenge” se face pe proprie răspundere, în deplină cunoștință a aptitudinii de a participa la eveniment, a stării de sănătate fizică și mentală. Fiecare participant este responsabil pentru propria securitate și siguranță. Organizatorul, partenerii, sponsorii, voluntarii şi personalul care participă la realizarea evenimentului nu sunt responsabili pentru orice fel de rănire sau pagube de orice natură care pot surveni în timpul sau ca urmare a desfășurării evenimentului. Fiecare participant trebuie să semneze la preluarea numărului de concurs o declarație de proprie răspundere prin care își asumă riscurile ce pot rezulta din participarea la “ Turnu Roșu Challenge” .  Participanții au obligația de a asculta și de a respecta indicațiile/instrucțiunile organizatorului și ale personalului de concurs. Pachetul de înscriere nu poate fi expediat prin poștă în avans. Organizatorul poate interzice luarea startului sau continuarea cursei pentru orice participant, dacă acesta se prezintă în stare de ebrietate, este sub efectul substanțelor dopante sau este în stare de slăbiciune evidentă, boală, epuizare fizică sau psihică.       
      <ul class="list-disc py-2"> <strong>Parcurgerea traseului necesită experiență și unele cunoștințe, cum ar fi:</strong>
        <li>fiecare participant să aibă cel puțin o experiență generală despre concursurile de alergare, fiind pregătit din punct de vedere al condiției fizice;</li>
        <li>fiecare participant să aibă cunoștințe tehnice despre abordarea unui traseu neamenajat prin pădure;</li>
        <li>fiecare participant să fie capabil să urce și să coboare în siguranță o pantă înclinată în condiții dificile;</li>
        <li>fiecare participant ar trebui să dea dovadă de fair-play și să acționeze în consecință atunci când situația o cere;</li>
        <li>fiecare participant ar trebui să știe și să aibă o atitudine care să țină cont de faptul că oricât de multe măsuri de siguranță ar lua organizatorii, nu sunt și nu vor putea fi acoperite toate riscurile rezultate din natura competițiilor, mediul și condițiile în care se desfășoară acestea;</li>
        <li>fiecare participant trebuie să știe că niciun premiu nu este mai presus de sănătatea și viața lui și/sau a altor participanți și să acționeze în consecință pentru a se proteja atunci când simte sau observă un pericol.</li>
      </ul>
      <ul class="list-disc py-2"> <strong>Pericole posibile:</strong>
        <li>accidentări prin alunecare datorate terenului;</li>
        <li>atac animal, câini sau urși;</li>
        <li>accidente cu automobile pe porțiunile asfaltate;</li>
        <li>degerături , hipotermie, insolație, deshidratare; </li>
        <li>orice incident trebuie anunțat la numărul de telefon 0742996598 sau după caz direct la 112 sau la serviciul salvamont;</li>
      </ul>
      </div>
    </section>
    <section class="p-1">
      <h2 class="text-xl md:text-2xl mt-10 text-gray-700 font-semibold">3. Înscrierea concurenților</h2>
      <div
        class="text-gray-700 p-1 mt-5 mb-3">
        Înscrierile se vor face doar online completând formularul de înscriere pus la dispoziție de organizator prin racehub.ro.
        Nu se fac înscrieri în ziua concursului, înscrierile se închid în 15 Septembrie cu o săptămână înaintea evenimentului. Măsura este luată pentru a putea optimiza utilizarea resurselor logistice, pentru a evita risipa sau lipsa unor produse sau servicii pentru concurenții înscriși. ( De exemplu, estimarea produselor alimentare pentru punctele de alimentare, brunch, medalii, tricouri șamd.)
    </div>
    </section>
    <section class="p-1">
      <h2 class="text-xl md:text-2xl mt-10 text-gray-700 font-semibold">4. Taxa de participare</h2>
      <div
        class="grid grid-rows-3 grid-cols-3 justify-items-center text-white bg-gray-800 font-bold rounded-xl text-normal lg:text-lg m-4 ml-2">
        <p class="p-2">Semimaraton</p>
        <p class="p-2">Cros</p>
        <p class="p-2">Power Hiking</p>
        <p class="p-2">140 RON</p>
        <p class="p-2">110 RON</p>
        <p class="p-2">90 RON</p>
      </div>
      <p class="text-gray-700 p-1 mt-5 mb-3">
        Taxa de participare se poate achita cu cardul la înscrierea pe racehub.ro
      </p>
      <p class="text-gray-700 p-1 mt-3 mb-3">
        În caz de neprezentare la start, abandon sau retragere din orice motiv, taxa de participare
        nu se returnează și nu este valabilă la un concurs ulterior, precum nici kitul de înscriere
        nu va putea fi ridicat ulterior. În cazul anulării competiției în caz de forță majoră sau
        din motive care nu depind de organizator, taxa de participare nu se returnează.
        Organizatorul nu va suporta în niciun fel eventualele costuri adiacente ale participanților
        (transport, cazare, masă, etc.).
      </p>
    </section>
    <section class="p-1">
      <h2 class="text-xl md:text-2xl mt-10 text-gray-700 font-semibold"> 5. Categorii de participare </h2>
      <table
        class="bg-gray-800 text-white border-none font-normal sm:font-semibold md:font-bold rounded-xl text-xs md:text-lg m-4 ml-2">
        <thead>
          <tr>
            <th class="py-2 px-2 sm:px-4 border-b border-gray-700">Cursă/Vârstă</th>
            <th class="py-2 px-2 sm:px-4 border-b border-gray-700">18-35</th>
            <th class="py-2 px-2 sm:px-4 border-b border-gray-700">36-49</th>
            <th class="py-2 px-2 sm:px-4 border-b border-gray-700">50+</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-2 sm:px-4">Cros</td>
            <td class="py-2 px-2 sm:px-4">M/F</td>
            <td class="py-2 px-2 sm:px-4">M/F</td>
            <td class="py-2 px-2 sm:px-4">M/F</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td class="py-2 px-2 sm:px-4">Semimaraton</td>
            <td class="py-2 px-2 sm:px-4">M/F</td>
            <td class="py-2 px-2 sm:px-4">M/F</td>
            <td class="py-2 px-2 sm:px-4">M/F</td>
          </tr>
        </tbody>
      </table>
      <p class="text-gray-700 p-1 mt-5 mb-3">
        Se premiază fiecare categorie de vârstă indiferent de numărul de participanți înscriși.
      </p>
    </section>
    <section class="p-1">
      <h2 class="text-xl md:text-2xl mt-10 text-gray-700 font-semibold">6. Premii</h2>

      <p class="text-gray-700 p-1 mt-5 mb-3">
        <ul><strong>Semimaraton</strong>
          <li>– se premiază primele 3 locuri la OPEN M/F ;</li>
          <li>– se premiază primele 3 locuri la fiecare categorie M/F ;</li>
          <li>– dacă unul din concurenți a fost premiat la categoria OPEN, acesta nu mai poate fi premiat și la categorie;</li>   
        </ul>
      </p>
      <p class="text-gray-700 p-1 mt-5 mb-3">
        <ul><strong>Cros</strong>
          <li>– se premiază primele 3 locuri la OPEN M/F ;</li>
          <li>– primele 5 locuri la OPEN vor fi trecute pe LEADERBOARD;</li>
          <li>– se premiază primele 3 locuri la fiecare categorie M/F ;</li>
          <li>– dacă unul din concurenți a fost premiat la categoria OPEN, acesta nu mai poate fi premiat și la categorie;</li>
        </ul>
      </p>
      <p class="text-gray-700 p-1 mt-5 mb-3"> Premile vor consta în bunătăți din cămara noastră și trofee</p>
    </section>

    <section class="p-1">
      <h2 class="text-xl md:text-2xl mt-10 text-gray-700 font-semibold">7. Proceduri de concurs</h2>
    </section>

    <section class="p-1">
      <h2 class="text-xl md:text-2xl mt-10 text-gray-700 font-semibold">7.1. Ședința tehnică</h2>
      <div class="text-gray-700 p-1 mt-5 mb-3">
      O ședință tehnică va fi ținută pentru toți participanții, în ziua concursului. În cursul ședinței tehnice participanții vor fi informați asupra traseului, porțiunilor periculoase, eventualelor modificări, precum și a regulilor de comportament pe care participanții sunt obligați să le respecte. Ședința tehnică va fi ținută la linia de start, recomandând prezența tuturor participanților. Ședința tehnică va avea loc în data concursului cu 30 de minute înainte de start.
      </div>
    </section>

    <section class="p-1">
      <h2 class="text-xl md:text-2xl mt-10 text-gray-700 font-semibold">7.2. Cronometrarea</h2>
      <div class="text-gray-700 p-1 mt-5 mb-3">
        Cronometrarea se face la punctul de start și la punctul de finish, prin cip de catre cei de la Racehub. Fiecare participant va purta un număr, acesta nefiind transmisibil. Este responsabilitatea participanților de a purta corect numărul de concurs (pe partea din față).
      </div>
    </section>

    <section class="p-1">
      <h2 class="text-xl md:text-2xl mt-10 text-gray-700 font-semibold">7.3. Timp limită</h2>
      <div class="text-gray-700 p-1 mt-5 mb-3">
        Timpul limită pentru parcurgerea traseului de Power Hiking este de 4:00 ore.
        Timpul limită pentru parcurgerea traseului de CROS este de 4:00 ore.
        Timpul limită pentru parcurgerea traseului de SEMIMARATON este de 6:00 ore.
        Timpul limită  intermediar in poiana Pleasa pentru SEMIMARATON este de 3:00 ore.
      </div>
    </section>

    <section class="p-1">
      <h2 class="text-xl md:text-2xl mt-10 text-gray-700 font-semibold">7.4. Timp limită intermediar</h2>
      <div class="text-gray-700 p-1 mt-5 mb-3">
        Scopul acestor timpi este de a menaja pe cât posibil voluntarii care sunt în situația de a aștepta în punctele de control și de alimentare, câte-o dată chiar în condiții meteo dificile. Pentru a-i proteja atât pe ei cât și pe participanții la cursele de alergare am stabilit câteva bariere de timp care să elimine posibilitatea prelungirii inutile a duratei expunerii în mediul montan. În cazul în care un alergător nu se încadrează la o barieră de timp, va fi direcționat spre traseul inferior* ca și distanță și va primi timpul de parcurgere al acestuia. Nu va fi eligibil pentru o clasare pe podium la noua cursă chiar dacă timpul îl va poziționa în primii 3.
        <br><br>
        Dacă un concurent refuză să renunțe la traseul ales cu toate că este în afara timpului, îi se va permite finalizarea traseului în afara concursului oficial și pe propria răspundere. Va trebui să predea numărul respectiv să îl îndepărteze și nu va mai beneficia de suportul alergătorului închizător respectiv a serviciilor de asistență din punctele de control și de alimentare.
      </div>
    </section>

    <section class="p-1">
      <h2 class="text-xl md:text-2xl mt-10 text-gray-700 font-semibold">7.5. Numărul de concurs</h2>
      <div class="text-gray-700 p-1 mt-5 mb-3">
        Preluarea numărului de concurs și a kit-ului de înscriere se face pe baza declarației pe propria răspundere si a actului de identitate sau copia acestuia, în locațiile și orele stabilite de organizator, conform informațiilor publicate pe site. Numărul de concurs trebuie montat astfel încât să fie vizibil din fată pe tot timpul concursului. Numărul nu trebuie să fie tăiat sau modificat sub nicio formă în timpul concursului.
      </div>
    </section>

    <section class="p-1">
      <h2 class="text-xl md:text-2xl mt-10 text-gray-700 font-semibold">7.6. Ridicarea kit-ului de start</h2>
      <div class="text-gray-700 p-1 mt-5 mb-3">
        Numărul de concurs se ridică în ziua evenimentului, începând cu ora 07:30 de la cortul special amenajat în zona de start/sosire din zona.
        <br><br>
        <em>Este interzisă participarea cu alt număr de concurs decât cel personal. Toți participanții sunt obligați să prezinte actul de identitate în momentul înscrierii, să completeze fișa de participare pe proprie răspundere și să o semneze. Prin participarea la această competiție, concurenții acceptă automat regulamentul acesteia.</em>
      </div>
    </section>


    <section class="p-1">
      <h2 class="text-xl md:text-2xl mt-10 text-gray-700 font-semibold">7.7. Oprirea din concurs</h2>
      <div class="text-gray-700 p-1 mt-5 mb-3">
        Organizatorul/închizătorul de traseu, își rezervă dreptul de a opri un participant în următoarele cazuri:
        <ul class="list-disc list-inside">
          <li>s-a accidentat după start, iar starea sa nu-i mai permite continuarea cursei;</li>
          <li>nu s-a încadrat în timpii limită anunțați în prealabil pentru anumite puncte de pe traseu;</li>
          <li>par a nu se încadra în timpii limită sau care au dificultăți vizibile în a termina oricare din curse;</li>
          <li>în cazuri excepționale.</li>
        </ul>
        Orice participant care nu mai poate sau nu mai vrea să continue cursa, indiferent de motiv trebuie să îi informeze pe organizatori imediat, la start, la punctele de control, la sosire sau sunând la numerele de urgență 0742996598.
        <br><br>
        Neanunțarea retragerii din concurs poate cauza o operațiune de căutare și salvare (echipe de salvare, salvamont etc.) pe cheltuiala participantului implicat. Retragerea va fi confirmată prin semnătură pe foaia de arbitraj. Orice participant care se retrage va fi ajutat cu privire la cea mai bună variantă de revenire la Start/Sosire, dar este responsabil pentru transportul propriu, ruta pe care o va folosi și acțiunile ulterioare momentului și locului retragerii.
      </div>
    </section>

    <section class="p-1">
      <h2 class="text-xl md:text-2xl mt-10 text-gray-700 font-semibold">7.8. Puncte de control</h2>
      <div class="text-gray-700 p-1 mt-5 mb-3">
        Pe traseu sunt amplasate puncte de control obligatorii. Participanții care nu trec printr-un punct de control, indiferent de motiv, vor fi descalificați.
        Pentru traseul de SEMIMARATON avem 2 puncte de control la kilometrul 9,3 in Poiana Pleașa si la kilometrul 14,3 in Chica Fedeleșului. 
      </div>
    </section>

    <section class="p-1">
      <h2 class="text-xl md:text-2xl mt-10 text-gray-700 font-semibold">7.9. Echipament obligatoriu</h2>
      <div class="text-gray-700 p-1 mt-5 mb-3">
        Având în vedere faptul că “Turnu Roșu Challenge” este un concurs ce se desfășoară în zona subalpină în luna Septembrie, suntem nevoiți să respectăm capriciile vremii și să luăm în considerare două variante de echipament în funcție de situația traseului și a condițiilor meteo prognozate la data evenimentului. Le vom numi varianta de VARĂ respectiv varianta de TOAMNĂ. Organizatorul va anunța cu 3 zile înaintea evenimentului care variantă va deveni obligatorie.
        <br><br>
        <strong>Varianta de VARĂ:</strong>
        <ul class="list-disc list-inside">
          <li>Încălțăminte sport cu talpă profilată</li>
          <li>Geacă impermeabilă/Foiță de vânt</li>
          <li>Bidon apă – obligatoriu pentru că nu vor fi pahare de plastic sau unică folosință la punctele de alimentare sau la start/finiș</li>
        </ul>
        <br>
        <strong>Varianta de TOAMNĂ:</strong>
        <ul class="list-disc list-inside">
          <li>Varianta vară + </li>
          <li>Mănuși</li>
          <li>Căciula/Bentița/Șapcă</li>
          <li>Bluză cu mânecă lungă (sau combinație tricou + mânecuțe)</li>
          <li>Pantalon lung/pantalon trei sferturi + șosete lungi (tot piciorul acoperit)</li>
          <li>Folie de supraviețuire</li>
        </ul>
        <br>
        <strong>Pentru ambele variante recomandăm și:</strong>
        <ul class="list-disc list-inside">
          <li>Borsetă/Ghiozdan</li>
          <li>Bețe (Opțional)</li>
          <li>Buff</li>
          <li>Fluier</li>
          <li>Telefon cu bateria încărcată</li>
        </ul>
        <br>
        <em>* Echipamentul este obligatoriu pe toată durata competiției. Echipamentul poate fi verificat de către organizatori și arbitri atât înainte de startul competiției cât și în timpul concursului. Lipsa unui element din echipament aduce cu sine descalificarea sau penalizarea concurentului.</em>
      </div>
    </section>

    <section class="p-1">
      <h2 class="text-xl md:text-2xl mt-10 text-gray-700 font-semibold">7.10. Startul</h2>
      <div class="text-gray-700 p-1 mt-5 mb-3">
        Se va da din punctul indicat după următoarea schemă:
        <ul class="list-disc list-inside">
          <li>SEMIMARATON: ora 09:30</li>
          <li>CROS: ora 09:45</li>
          <li>POWER HIKING: ora 10:00</li>
        </ul>
      </div>
    </section>

    <section class="p-1">
      <h2 class="text-xl md:text-2xl mt-10 text-gray-700 font-semibold">7.11. Traseul</h2>
      <div class="text-gray-700 p-1 mt-5 mb-3">
        Evenimentul este o competiție outdoor. Traseul este neamenajat și neprotejat, în cea mai mare parte desfășurându-se prin pădure, folosește drumuri publice, poteci marcate și nemarcate, etc. Anumite porțiuni din traseu pot fi considerate dificile. Organizatorul poate modifica traseul din diferite motive, care includ: condițiile meteo, siguranța, restricții de circulație, etc. Modificările vor fi anunțate la ședințele tehnice sau prin email înainte de începerea cursei. În ziua evenimentului va avea loc o scurtă prezentare a traseului cu 30 de minute înainte de start în cadrul ședinței tehnice.
      </div>
    </section>

    <section class="p-1">
      <h2 class="text-xl md:text-2xl mt-10 text-gray-700 font-semibold">7.12. Penalizări</h2>
      <div class="text-gray-700 p-1 mt-5 mb-3">
        <ul class="list-disc list-inside">
          <li>lipsa unui obiect din echipamentul obligatoriu – 30min penalizare</li>
          <li>ratarea unui punct de control – descalificare</li>
          <li>scurtarea traseului – descalificare</li>
          <li>nerespectarea regulilor competiției – descalificare</li>
          <li>comportament nesportiv față de alți participanți, oficiali, voluntari, arbitri, public, alte persoane – descalificare</li>
          <li>modificarea sau schimbarea numerelor de concurs – descalificare</li>
          <li>Lăsarea de resturi, ambalaje, echipament, pe traseu și/sau distrugerea deliberată a mediului înconjurător și a marcajelor de pe traseu vor atrage după sine descalificarea și interdicția de a mai participa la orice eveniment organizat în viitor.</li>
        </ul>
      </div>
    </section>

    <section class="p-1">
      <h2 class="text-xl md:text-2xl mt-10 text-gray-700 font-semibold">8. Modificarea traseului, alte decizii privind desfășurarea concursului</h2>
      <div class="text-gray-700 p-1 mt-5 mb-3">
        Organizatorul poate modifica oricând traseul sau poate anula/opri competiția dacă aceasta nu se poate desfășura în condiții de siguranță. Suporterii pot susține orice competitor cu condiția să respecte regulile de conduită, indicațiile autorităților și/sau ale oficialilor și să nu împiedice desfășurarea competiției. Pe parcursul traseelor de concurs nu este permis niciun ajutor venit din exterior (suporter, spectator etc.), excepție făcând cazurile deosebite și ajutorul acordat în punctele de realimentare amenajate, unde competitorii pe lângă băuturile, fructele și alimentele energizante oferite de organizatori pot primi și alte alimente sau lichide.
        <br><br>
        Toate deciziile vor fi luate de comitetul de concurs sau de directorul de concurs. În caz de forță majoră, organizatorii pot lua decizia unor modificări de traseu sau program. La limită se poate decide inclusiv amânarea sau anularea cursei, în situații excepționale. Organizatorul își rezervă dreptul de a aduce modificări asupra informațiilor afișate pe pagina de internet, a regulamentului sau a programului etc. Aceste modificări vor fi aduse la cunoștință participanților cu minim 5 zile înaintea concursului sau cel târziu la preluarea numerelor de concurs.
      </div>
    </section>

    <section class="p-1">
      <h2 class="text-xl md:text-2xl mt-10 text-gray-700 font-semibold">9. Contestații</h2>
      <div class="text-gray-700 p-1 mt-5 mb-3">
        Orice contestație se va comunica oficialilor imediat după afișarea rezultatelor. (Acestea vor putea fi verificate online pe racehub.ro ). Contestația se va depune în scris însoțită de suma de 50 Ron. În cazul în care contestația este admisă, suma de bani va fi restituită. În caz contrar se va reține taxa de contestație. Nu se acceptă contestații înainte cu 30 de minute de premiere, în timpul sau după premierea categoriei la care face referință.
      </div>
    </section>
  </div>
</template>