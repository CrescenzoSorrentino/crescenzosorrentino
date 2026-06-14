<template>
  <main>
    <section class="section">
      <div class="container container--narrow">
        <!-- v-html renderizza HTML grezzo — usare solo con contenuto fidato -->
        <div class="content" v-html="content" />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
// Versione italiana della Cookie Policy. La gemella inglese vive in cookie-policy.vue:
// le due pagine si collegano tramite hreflang e ognuna è canonica di se stessa.
const description = "Cookie policy di crescenzosorrentino.com: come utilizziamo i cookie e come gestire le tue preferenze."

// Pagina in italiano: footer e attributo lang seguono questa lingua.
useLocale().value = "it"

useHead({
  htmlAttrs: { lang: "it" },
  link: [
    { rel: "canonical", href: "https://crescenzosorrentino.com/informativa-cookie" },
    { rel: "alternate", hreflang: "it", href: "https://crescenzosorrentino.com/informativa-cookie" },
    { rel: "alternate", hreflang: "en", href: "https://crescenzosorrentino.com/cookie-policy" },
    { rel: "alternate", hreflang: "x-default", href: "https://crescenzosorrentino.com/cookie-policy" },
  ],
})

useSeoMeta({
  title: "Cookie Policy",
  description,
  ogTitle: "Cookie Policy — Crescenzo Sorrentino",
  ogDescription: description,
  ogUrl: "https://crescenzosorrentino.com/informativa-cookie",
  twitterTitle: "Cookie Policy — Crescenzo Sorrentino",
  twitterDescription: description,
})

// v-html è l'equivalente di dangerouslySetInnerHTML di React.
// Sicuro in questo caso perché il contenuto è statico e scritto da noi.
const content = `
<h1 class="cp-h1">Cookie Policy</h1>
<div class="cp-dates">
  <p>In vigore dal: 14 aprile 2026</p>
  <p>Ultimo aggiornamento: 14 aprile 2026</p>
</div>

<h2>Cosa sono i cookie?</h2>
<div class="cp-p">
  <p>Questa Cookie Policy spiega cosa sono i cookie, come li utilizziamo, le tipologie che impieghiamo (ossia le informazioni che raccogliamo tramite i cookie e come vengono usate) e come gestire le tue preferenze.</p>
  <p>I cookie sono piccoli file di testo usati per memorizzare piccole quantità di informazioni. Vengono salvati sul tuo dispositivo quando un sito si carica nel browser e aiutano a far funzionare correttamente il sito, a migliorarne la sicurezza, a offrire un'esperienza migliore e ad analizzarne le prestazioni per capire cosa funziona e cosa si può migliorare.</p>
</div>

<h2>Come utilizziamo i cookie?</h2>
<div class="cp-p">
  <p>Come la maggior parte dei servizi online, il nostro sito può utilizzare sia cookie propri (first-party) sia di terze parti per diverse finalità. I cookie propri sono principalmente necessari al corretto funzionamento del sito e non raccolgono dati che permettano di identificarti.</p>
  <p>I cookie di terze parti, quando presenti, servono soprattutto a capire come si comporta il sito, a monitorare il modo in cui vi interagisci, a mantenere sicuri i servizi e a migliorare la tua esperienza complessiva e la velocità delle tue visite successive.</p>
</div>

<h2>Cookie utilizzati su questo sito</h2>
<div class="cp-p">
  <p>Questo sito non utilizza cookie a fini di tracciamento o analisi. Ci affidiamo a Vercel Analytics, una soluzione di analisi orientata alla privacy che raccoglie solo dati aggregati e anonimi, senza installare alcun cookie sul tuo dispositivo.</p>
  <p>L'unico dato salvato localmente sul tuo dispositivo è la <strong>preferenza del tema</strong> (modalità chiara o scura), conservata in <code>localStorage</code>. Si tratta di una funzione del browser, non di un cookie, e non contiene alcuna informazione che permetta di identificarti.</p>
</div>
`

</script>


<style scoped>
/* :deep() è l'equivalente di :global() dei CSS Modules di React:
   raggiunge gli elementi generati da v-html ignorando lo scoping. */

.content :deep(.cp-h1) {
  font-family: var(--font-headings);
  font-size: var(--text-3xl);
  font-weight: 300;
  color: var(--color-primary);
  margin-bottom: var(--space-4);
  line-height: 1.3;
}

.content :deep(.cp-dates) {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  margin-bottom: var(--space-8);
}

.content :deep(h2) {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-primary);
  margin-block: var(--space-6) var(--space-3);
}

.content :deep(.cp-p p),
.content :deep(.cp-p) {
  font-size: var(--text-sm);
  color: var(--text-primary);
  line-height: 1.7;
  margin-bottom: var(--space-4);
}

.content :deep(a) {
  color: var(--color-accent);
  text-decoration: underline;
}

</style>
