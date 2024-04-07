<template>
  <div>
    <NuxtLink to="/videos">
      Voltar para todos os Vídeos
    </NuxtLink>
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
          <button @click="removeFavorito(video.id, video.descricao)">
            Remover Favorito
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Video } from '~/interfaces/video.interface';

const videoStore = useVideoStore();
const { favoritos } = storeToRefs(videoStore);

const { $toast }  = useNuxtApp();

const removeFavorito = (id: number, descricao: string) => {
  videoStore.deletarFavorito(id);
  $toast.error(`${descricao} - foi removido!`);
}
</script>