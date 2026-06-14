<template>
  <AppLocalLanding :data="locals.ercolano" />
</template>

<script setup lang="ts">
// Landing locale: realizzazione siti web a Ercolano (area vesuviana).
// Tutto il contenuto e il rendering vivono in data/locals.ts + AppLocalLanding.
import { locals } from "~/data/locals"
</script>
