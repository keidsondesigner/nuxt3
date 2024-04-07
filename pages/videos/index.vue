<template>
  <div>
    videos
    <NuxtLink to="/videos/favoritos">
      Favoritos ({{ getFavoritos.length }})
    </NuxtLink>
    <div class="videos">
      <div v-for="video in videos" :key="video.id">
        <h2>{{ video.descricao }}</h2>
        <p>{{ converterDataBrasil(video.data_postagem) }}</p>
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
        <div>
          <button
            @click="adicionarFavorito(video)"
          >
            Add favoritos
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Video } from '@/interfaces/video.interface';

const { $toast } = useNuxtApp();

const { adicionarFavorito, getFavoritos } = useVideoStore();

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

onMounted(() => {
  $toast.success("Videos carregados");
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

.videos button {
  display: inline-block;
}
</style>