<template>
  <div class="conatiner-principal m-8">
    <div class="flex justify-between mb-8 items-end">
      <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Lista de vídeos
      </h1>
      <NuxtLink to="/videos/favoritos">
        <Button class="gap-2 relative">
          Meus favoritos
          <Inbox />
          <span v-if="videosFavoritos.length > 0" class="text-red-400 absolute right-2 bottom-5 bg-slate-800 h-5 w-5 rounded-full">
            {{ videosFavoritos.length }}
          </span>
        </Button>
      </NuxtLink>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-4">
      <div
        class="w-full flex flex-col items-center p-5 rounded-xl border bg-card text-card-foreground shadow"
        v-for="video in videos" :key="video.id"
        >
          <h2 class="text-1xl font-bold mb-2">{{ video.descricao }}</h2>
          <iframe 
            class="w-full aspect-video rounded"
            :src="video.url"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
          <div class="w-full flex justify-between gap-4 mt-3 ">
            <Button
              class="gap-2"
              @click="addFavorito(video)"
            >
              Favoritos
              <Plus />
            </Button>
            <NuxtLink :to="{ name: 'videos-id', params: { id: video.id }}">
              <Button
                class="gap-2"
                variant="secondary"
              >
                Detalhes
                <Eye />
              </Button>
            </NuxtLink>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Video } from '@/interfaces/video.interface';
import { Inbox, Eye, Plus } from 'lucide-vue-next';

const { $toast } = useNuxtApp();
// LocalStorage e Estados reativos
const { adicionarFavorito, getFavoritos } = useVideoStore();
const videosFavoritos = ref<Video[]>([]);

// API - Buscar os videos 
// renomei meu data para videos //
const { data: videos, error } = await useFetch("/api/v1/videos");


const addFavorito = (video: Video) => {
  adicionarFavorito(video)
  $toast.success(`${video.descricao} - foi adicionado aos favoritos`);
}

onMounted(async () => {
  if(error.value) {
    $toast.error(error.value.statusMessage || "");
  }

  videosFavoritos.value = await getFavoritos;
})
</script>
<style scoped>

.videos {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>