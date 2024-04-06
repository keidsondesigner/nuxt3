<template>
  <div>
    video por id: {{ idParams }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const idParams = computed(() => route.params.id);
</script>
<style scoped>
</style>