<template>
<Dialog>
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
          Excluír
          <SquarePen />
        </Button>
        <DialogTrigger as-child>
          <Button
            class="gap-2 mr-4"
            variant="secondary"
            @click="editarFavorito(video)"
          >
            Editar
            <SquarePen />
          </Button>
        </DialogTrigger>
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
  <DialogContent class="max-w-[360px] sm:max-w-[425px] md:max-w-[640px]">
    <DialogHeader>
      <DialogTitle>Editar video</DialogTitle>
      <DialogDescription>
        Para salvar alterações, basta clicar no botão confirmar.
      </DialogDescription>
    </DialogHeader>
    <div class="grid gap-4 py-4">
      <div class="grid grid-cols-4 items-center gap-4">
        <Label for="name" class="text-right">
          Descrição
        </Label>
        <Input type="text" id="name" value="Pedro Duarte" class="col-span-3" />
      </div>
      <div class="grid grid-cols-4 items-center gap-4">
        <Label for="username" class="text-right">
          Url
        </Label>
        <Input type="text" id="username" value="@peduarte" class="col-span-3" />
      </div>
    </div>
    <DialogFooter>
      <Button type="submit">
        Confirmar
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
</template>

<script setup lang="ts">
import { Plus, SquarePen } from 'lucide-vue-next';
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

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

// Adicionar o video aos favoritos no store + LocalStorage
function addFavorito(video: Video) {
  adicionarFavorito(video)
  $toast.success(`${video.descricao} - foi adicionado aos favoritos`);
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