<template>
  <AppLocalLanding :data="locals.portici" />
</template>

<script setup lang="ts">
// Landing locale: realizzazione siti web a Portici (area vesuviana).
// Tutto il contenuto e il rendering vivono in data/locals.ts + AppLocalLanding.
import { locals } from "~/data/locals"
</script>
