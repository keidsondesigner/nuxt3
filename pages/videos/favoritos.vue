<template>
  <div>
    <h1 class="text-4xl text-center mb-4">tituloFavoritos</h1>
    <div>
      <div
        class="grid grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4"
      >
        <div v-for="video in favoritos" :key="video.id">
          {{ video.descricao }}

          <iframe
            class="h-48 w-full"
            :src="video.url"
            title="YouTube video player"
            frameborder="0"
          />
          <button @click="videoStore.deletarFavorito(video.id)">
            Remover Favorito
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const videoStore = useVideoStore();
const { favoritos } = storeToRefs(videoStore);

</script>