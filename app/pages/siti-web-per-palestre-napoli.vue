<script setup lang="ts">
// Landing verticale: siti web per palestre e centri fitness a Napoli.
// Tutto il contenuto e il rendering vivono in data/verticals.ts + AppVerticalLanding.
import { verticals } from "~/data/verticals"
</script>

<template>
  <AppVerticalLanding :data="verticals.palestre" />
</template>
