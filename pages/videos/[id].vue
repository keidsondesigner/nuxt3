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
  // faço a verificação com middleware, antes de entrar nesta página,
  middleware: ["video", "auth"],
})
const route = useRoute();

const idParams = computed(() => route.params.id);
</script>
<style scoped>
</style>