<template>
  <div>
    <h1>Componente - Nuxt 3</h1>
    <p>Autor: Keidson</p>
    <p>{{ diferencaEmDias }} dias atrás</p>
  </div>
</template>
<script setup lang="ts">
const { diasPassados, diferencaEmDias } = useFormatacao();
const dataVideo = new Date(2023, 9, 2);

diasPassados(dataVideo);
</script>