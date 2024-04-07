<template>
  <div>
    <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Lista de vídeos
    </h1>
    <NuxtLink to="/videos/favoritos">
      <Badge class="gap-2">
        Meus favoritos
        <Inbox />
        {{ videosFavoritos.length }}
      </Badge>
    </NuxtLink>
    <div class="videos">
      <div v-for="video in videos" :key="video.id">
        <h2>{{ video.descricao }}</h2>
        <iframe 
          width="550"
          height="400"
          :src="video.url"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
        <div class="flex gap-4 mt-3">
          <Button
            class="gap-2"
            @click="adicionarFavorito(video)"
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
              <ChevronRight />
            </Button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Video } from '@/interfaces/video.interface';
import { Inbox, ChevronRight, Plus } from 'lucide-vue-next';

const { $toast } = useNuxtApp();

const { adicionarFavorito, getFavoritos } = useVideoStore();
const videosFavoritos = ref<Video[]>([]);

const videos: Video[] = [
  {
    id: 1,
    descricao: "06 - Middleware - Nuxt 3",
    url: "https://www.youtube.com/embed/d-4fyzA2ZC8?si=MvJ-16yYX3h_832_",
    data_postagem: "2023-10-15"
  },
  {
    id: 2,
    descricao: "07 - Composables - Nuxt 3",
    url: "https://www.youtube.com/embed/d-4fyzA2ZC8?si=MvJ-16yYX3h_832_",
    data_postagem: "2023-10-20"
  },
  {
    id: 3,
    descricao: "08 - UseState & Pinia (Ger de Estado) - Nuxt 3",
    url: "https://www.youtube.com/embed/d-4fyzA2ZC8?si=MvJ-16yYX3h_832_",
    data_postagem: "2023-10-25"
  },
  {
    id: 4,
    descricao: "12 - Server (Backend) - Nuxt 3",
    url: "https://www.youtube.com/embed/d-4fyzA2ZC8?si=MvJ-16yYX3h_832_",
    data_postagem: "2023-10-30"
  }
]

const converterDataBrasil = (dataAtual: string) => {
  return new Date(dataAtual).toLocaleDateString("pt-BR");
}

onMounted(async () => {
  videosFavoritos.value = await getFavoritos;
  $toast.success("Videos carregados");
})
</script>
<style scoped>

Button {
  display: flex;
}

.videos {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>