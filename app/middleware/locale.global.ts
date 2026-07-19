// Reset della lingua a ogni cambio rotta: il default torna sempre inglese.
// Le pagine in italiano la reimpostano su "it" nel proprio setup, che gira DOPO il middleware.
// Così una pagina IT uscente non può più sovrascrivere quella entrante nelle navigazioni IT -> IT
// (es. dall'hub dei settori a una landing verticale, o da un vertical alla pagina madre).
//
// Gli articoli del blog fanno eccezione: la loro lingua sta nel frontmatter, quindi si conosce
// solo dopo una query asincrona. Nel SSR il Footer è un fratello sincrono di <NuxtPage /> e viene
// renderizzato senza attendere il setup asincrono della pagina, perciò se aspettassimo
// pages/blog/[slug].vue il footer uscirebbe sempre in inglese (link legali EN su articoli IT).
// Qui la risolviamo prima del render. La chiave di useAsyncData è la stessa usata dalla pagina,
// così la query viene condivisa invece di essere eseguita due volte.
export default defineNuxtRouteMiddleware(async (to) => {
  const locale = useLocale()
  locale.value = "en"

  if (!to.path.startsWith("/blog/")) return

  const { data: article } = await useAsyncData(to.path, () =>
    queryCollection("blog").path(to.path).first()
  )

  if (article.value?.lang === "it") locale.value = "it"
})
