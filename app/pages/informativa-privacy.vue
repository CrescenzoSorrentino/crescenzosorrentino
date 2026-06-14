<template>
  <main>
    <section class="section">
      <div class="container container--narrow">
        <div class="content" v-html="content" />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { EMAIL } from "~/data/contact"

// Versione italiana della Privacy Policy. La gemella inglese vive in privacy-policy.vue:
// le due pagine si collegano tramite hreflang e ognuna è canonica di se stessa.
const description = "Informativa sulla privacy di crescenzosorrentino.com: come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali."

// Pagina in italiano: footer e attributo lang seguono questa lingua.
useLocale().value = "it"

useHead({
  htmlAttrs: { lang: "it" },
  link: [
    { rel: "canonical", href: "https://crescenzosorrentino.com/informativa-privacy" },
    { rel: "alternate", hreflang: "it", href: "https://crescenzosorrentino.com/informativa-privacy" },
    { rel: "alternate", hreflang: "en", href: "https://crescenzosorrentino.com/privacy-policy" },
    { rel: "alternate", hreflang: "x-default", href: "https://crescenzosorrentino.com/privacy-policy" },
  ],
})

useSeoMeta({
  title: "Informativa sulla Privacy",
  description,
  ogTitle: "Informativa sulla Privacy — Crescenzo Sorrentino",
  ogDescription: description,
  ogUrl: "https://crescenzosorrentino.com/informativa-privacy",
  twitterTitle: "Informativa sulla Privacy — Crescenzo Sorrentino",
  twitterDescription: description,
})

// v-html renderizza HTML grezzo — sicuro perché il contenuto è statico e scritto da noi.
// EMAIL viene interpolata qui in script, non nel template, per mantenere il contenuto leggibile.
const content = `
<h1 class="pp-h1">Informativa sulla Privacy
  <br><span>Ultimo aggiornamento: 14 aprile 2026</span>
  <br><span>In vigore dal: 14 aprile 2026</span>
</h1>

<p class="pp-p">
  La presente Informativa sulla Privacy descrive le modalità con cui Crescenzo Sorrentino, Via Antonio Luise, 35, 80059 Napoli (Italia), email: ${EMAIL}, telefono: +393241301276, raccoglie, utilizza e comunica le informazioni che acquisisce quando utilizzi questo sito ( https://crescenzosorrentino.com ), di seguito il "Servizio". Accedendo o utilizzando il Servizio, acconsenti alla raccolta, all'uso e alla comunicazione delle tue informazioni secondo quanto previsto da questa informativa. Se non sei d'accordo, ti invitiamo a non accedere né utilizzare il Servizio.
</p>

<p class="pp-p">
  Possiamo modificare questa informativa in qualsiasi momento, senza preavviso, pubblicando la versione aggiornata sul Servizio. Le modifiche diventano efficaci 180 giorni dopo la pubblicazione e, continuando a utilizzare il Servizio dopo tale termine, accetti l'informativa aggiornata. Ti consigliamo quindi di consultare periodicamente questa pagina.
</p>

<ol class="pp-ol">
  <li>
    <h2 class="pp-h2">Informazioni che raccogliamo</h2>
    <p class="pp-p">Raccogliamo e trattiamo i seguenti dati personali:</p>
    <ol class="pp-ol">
      <li>Nome</li>
      <li>Email</li>
      <li>Numero di telefono</li>
    </ol>
  </li>

  <li>
    <h2 class="pp-h2">Come utilizziamo le tue informazioni</h2>
    <p class="pp-p">Utilizziamo le informazioni che raccogliamo per le seguenti finalità:</p>
    <ol class="pp-ol">
      <li>Far rispettare i Termini e Condizioni</li>
      <li>Fornire assistenza</li>
      <li>Proteggere il sito</li>
    </ol>
    <p class="pp-p">Se intendiamo utilizzare le tue informazioni per finalità diverse, te lo chiederemo e le tratteremo solo dopo aver ottenuto il tuo consenso, e unicamente per le finalità per cui è stato prestato, salvo diversi obblighi di legge.</p>
  </li>

  <li>
    <h2 class="pp-h2">Come condividiamo le tue informazioni</h2>
    <p class="pp-p">Non trasferiamo i tuoi dati personali a terzi senza il tuo consenso, salvo nei casi limitati descritti di seguito:</p>
    <p class="pp-p">Utilizziamo Vercel Analytics per monitorare le prestazioni del sito. Questo servizio raccoglie esclusivamente dati aggregati e anonimi e non riceve alcuna informazione che permetta di identificarti.</p>
    <p class="pp-p">Potremmo inoltre comunicare i tuoi dati personali: (1) per adempiere a obblighi di legge, regolamenti, ordini dell'autorità giudiziaria o altri procedimenti legali; (2) per far valere gli accordi stipulati con te, inclusa questa informativa; (3) per rispondere a contestazioni secondo cui il tuo utilizzo del Servizio violerebbe diritti di terzi. In caso di fusione o acquisizione della nostra attività da parte di un'altra società, i tuoi dati rientreranno tra i beni trasferiti al nuovo titolare.</p>
  </li>

  <li>
    <h2 class="pp-h2">Conservazione delle informazioni</h2>
    <p class="pp-p">Conserviamo i tuoi dati personali per 12 mesi, o per il tempo necessario a realizzare le finalità per cui sono stati raccolti, come descritto in questa informativa. In alcuni casi potremmo doverli conservare più a lungo, ad esempio per obblighi di archiviazione o rendicontazione previsti dalla legge, o per altre ragioni legittime come la tutela dei nostri diritti e la prevenzione delle frodi. Le informazioni anonime residue e i dati aggregati, che non permettono di identificarti né direttamente né indirettamente, possono essere conservati a tempo indeterminato.</p>
  </li>

  <li>
    <h2 class="pp-h2">I tuoi diritti</h2>
    <p class="pp-p">In base alla normativa applicabile, puoi avere il diritto di accedere ai tuoi dati personali, rettificarli o cancellarli, ricevere una copia dei tuoi dati, limitarne o opporti al trattamento, chiederci di trasferirli (portabilità) a un altro soggetto, revocare il consenso prestato, presentare un reclamo all'autorità di controllo ed esercitare gli altri diritti previsti dalle leggi vigenti. Per esercitarli puoi scriverci a ${EMAIL}. Risponderemo alla tua richiesta nel rispetto della normativa applicabile.</p>
    <p class="pp-p">Tieni presente che, se non ci consenti di raccogliere o trattare i dati necessari, oppure se revochi il consenso per le relative finalità, potresti non essere in grado di accedere o utilizzare i servizi per cui tali dati erano richiesti.</p>
  </li>

  <li>
    <h2 class="pp-h2">Cookie</h2>
    <p class="pp-p">Questo sito non utilizza cookie. Per maggiori informazioni consulta la nostra <a href="/informativa-cookie">Cookie Policy</a>.</p>
  </li>

  <li>
    <h2 class="pp-h2">Sicurezza</h2>
    <p class="pp-p">La sicurezza delle tue informazioni è importante per noi e adottiamo misure ragionevoli per prevenirne la perdita, l'uso improprio o la modifica non autorizzata. Tuttavia, considerati i rischi intrinseci della rete, non possiamo garantire una sicurezza assoluta: non possiamo quindi assicurare la protezione delle informazioni che ci trasmetti, che invii a tuo rischio.</p>
  </li>

  <li>
    <h2 class="pp-h2">Link a siti di terzi e uso delle tue informazioni</h2>
    <p class="pp-p">Il nostro Servizio può contenere link ad altri siti che non gestiamo noi. Questa informativa non riguarda le policy sulla privacy né le pratiche di soggetti terzi, compresi i gestori di eventuali siti o servizi raggiungibili tramite link presenti sul Servizio. Ti consigliamo vivamente di leggere l'informativa sulla privacy di ogni sito che visiti. Non abbiamo alcun controllo e non ci assumiamo alcuna responsabilità per i contenuti, le policy o le pratiche di siti o servizi di terzi.</p>
  </li>

  <li>
    <h2 class="pp-h2">Reclami / Responsabile della protezione dei dati</h2>
    <p class="pp-p">Per qualsiasi domanda o dubbio sul trattamento dei tuoi dati in nostro possesso, puoi scrivere al nostro Responsabile reclami: Crescenzo Sorrentino, Via Antonio Luise, 35, email: ${EMAIL}. Gestiremo le tue richieste nel rispetto della normativa applicabile.</p>
  </li>
</ol>

`

</script>


<style scoped>

/* CONTENUTO */

.content :deep(.pp-h1) {
  font-family: var(--font-headings);
  font-size: var(--text-3xl);
  font-weight: 300;
  color: var(--color-primary);
  margin-bottom: var(--space-8);
  line-height: 1.3;
}

.content :deep(.pp-h1 span) {
  font-size: var(--text-sm);
  font-weight: 400;
  color: var(--text-secondary);
}

.content :deep(.pp-h2) {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-primary);
  margin-block: var(--space-6) var(--space-3);
}

.content :deep(.pp-p) {
  font-size: var(--text-sm);
  color: var(--text-primary);
  line-height: 1.7;
  margin-bottom: var(--space-4);
}

.content :deep(.pp-ol) {
  padding-left: var(--space-6);
  margin-bottom: var(--space-4);
}

.content :deep(.pp-ol li) {
  font-size: var(--text-sm);
  color: var(--text-primary);
  line-height: 1.7;
  margin-bottom: var(--space-2);
}

.content :deep(a) {
  color: var(--color-accent);
  text-decoration: underline;
}
</style>
