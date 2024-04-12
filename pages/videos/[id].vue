<template>
  <!-- <div>
    video por id: {{ idParams }}
  </div> -->
  <div class="conatiner-principal m-8">
    <div class="flex justify-between mb-8 items-end">
      <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {{ video?.descricao }}
      </h1>
      <div>
        <Button
          class="gap-2 mr-4"
          @click="addFavorito(video)"
        >
          Favoritar
          <Plus />
        </Button>
        <Button
          class="gap-2 mr-4"
          variant="destructive"
          @click="editarFavorito(video)"
        >
          Editar
          <SquarePen />
        </Button>
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
    </div>
  </div>
  <section
    class="max-w-4xl mx-auto flex flex-col items-center p-5 rounded-xl border bg-card text-card-foreground shadow"

    >
      <iframe 
        class="w-full aspect-video rounded"
        :src="video?.url"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      />
  </section>
</template>

<script setup lang="ts">
import { ChevronLeft, Plus, SquarePen } from 'lucide-vue-next';
import type { Video } from '~/interfaces/video.interface';

// define o estilo de layout, que vai ser mostrado nesta página;
definePageMeta({
  layout: "exibicao",
  // faço a verificação com middleware, antes de entrar nesta página,
  middleware: ["video", "auth"],
})
const route = useRoute();
const idParams = computed(() => route.params.id);

const { $toast } = useNuxtApp();

// Buscar o video por id
const { data: video, error } = await useFetch(`/api/v1/videos/${route.params.id}`);
if(error.value) {
  console.log(error.value)
  $toast.error("Erro ao carregar o vídeo");
}

const { adicionarFavorito } = useVideoStore();

function addFavorito(video: Video) {
  console.log(video)
}

function editarFavorito(video: Video) {
  console.log(video)
}

onMounted(async () => {
  video.value = await $fetch(`/api/v1/videos/${route.params.id}`)
})
</script>
<style scoped>
</style>