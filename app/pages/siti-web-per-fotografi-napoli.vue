<template>
  <AppVerticalLanding :data="verticals.fotografi" />
</template>

<script setup lang="ts">
// Landing verticale: siti web per fotografi a Napoli.
// Tutto il contenuto e il rendering vivono in data/verticals.ts + AppVerticalLanding.
import { verticals } from "~/data/verticals"
</script>
