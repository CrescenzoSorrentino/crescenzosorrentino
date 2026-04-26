<script setup lang="ts">
// Meta globali ereditati da tutte le pagine — ogni pagina può sovrascrivere i singoli campi.
useSeoMeta({
  ogSiteName: "Crescenzo Sorrentino",
  ogType: "website",
  ogLocale: "en_US",
  twitterCard: "summary_large_image",
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
