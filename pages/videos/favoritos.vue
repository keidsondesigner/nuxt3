<template>
  <div class="conatiner-principal m-8">
    <div class="flex justify-between mb-8 items-end">
      <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Meus vídeos favoritos
      </h1>
      <NuxtLink to="/videos">
        <Button
          class="gap-2"
          variant="secondary"
        >
          Voltar
          <ChevronLeft />
        </Button>
      </NuxtLink>
    </div>
    <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-4"
      >
        <div 
          class="w-full flex flex-col items-center p-5 frounded-xl border bg-card text-card-foreground shadow"
          v-for="video in favoritos" :key="video.id">
          <h2 class="text-1xl font-bold mb-2">{{ video.descricao }}</h2>
          <iframe
            class="w-full aspect-video rounded"
            :src="video.url"
            title="YouTube video player"
            frameborder="0"
          />
          <div class="w-full flex justify-between gap-4 mt-3 ">
            <Button
              class="gap-2"
              variant="secondary"
              @click="removeFavorito(video.id, video.descricao)"
            >
              Remover
              <X class="text-red-400"/>
            </Button>
          </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronLeft, X } from 'lucide-vue-next';
import type { Video } from '~/interfaces/video.interface';

const videoStore = useVideoStore();
const { favoritos } = storeToRefs(videoStore);

const { $toast }  = useNuxtApp();

const removeFavorito = (id: number, descricao: string) => {
  videoStore.deletarFavorito(id);
  $toast.error(`${descricao} - foi removido!`);
}
</script>