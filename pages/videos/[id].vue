<template>
  <div>
    video por id: {{ idParams }}
  </div>
  <VideoDetalhes />
  <VideoControlePlay />
</template>

<script setup lang="ts">
// define o estilo de layout, que vai ser mostrado nesta página;
definePageMeta({
  layout: "exibicao",
})
const route = useRoute();

const idParams = computed(() => route.params.id);
</script>
<style scoped>
</style>