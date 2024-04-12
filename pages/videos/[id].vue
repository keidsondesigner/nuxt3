<template>
<Dialog>
  <!-- <div>
    video por id: {{ route.params.id }}
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
          @click="excluirVideo"
        >
          Excluír
          <X />
        </Button>
        <DialogTrigger as-child>
          <Button
            class="gap-2 mr-4"
            @click="abrirModal"
            variant="secondary"
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
    <form 
      @submit.prevent="editarVideo"
    >
      <div class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="descricao" class="text-right">
            Descrição
          </Label>
          <Input
            class="col-span-3"
            v-model="stateForm.descricao"
            type="text"
            id="descricao"
            required
          />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="url" class="text-right">
            Url
          </Label>
          <Input 
            class="col-span-3" 
            v-model="stateForm.url"
            type="text" 
            id="url" 
            required
          />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">
          Confirmar
        </Button>
      </DialogFooter>
    </form>
  </DialogContent>
</Dialog>
</template>

<script setup lang="ts">
import { Plus, SquarePen, X } from 'lucide-vue-next';
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

import type { Video } from '@/interfaces/video.interface';

// define o estilo de layout, que vai ser mostrado nesta página;
definePageMeta({
  layout: "exibicao",
  // faço a verificação com middleware, antes de entrar nesta página,
  middleware: ["video", "auth"],
})
const route = useRoute();
const router = useRouter();
const { $toast } = useNuxtApp();

// Store e Storage
const { adicionarFavorito } = useVideoStore();

// API - Buscar o video por id
// renomei meu data para video //
const { data: video } = await useFetch(`/api/v1/videos/${route.params.id}`);
if(!video.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Video não encontrado",
  })
}

// Estados reativos
const stateForm = reactive({
  id: 0,
  descricao: "",
  url: "",
});

// Função ao ser clicada para abrir o modal, 
// preenchendo os inputs com os dados do video atual
function abrirModal() {
  stateForm.descricao = video.value.descricao;
  stateForm.url = video.value.url;
  stateForm.id = video.value.id;
};

// Adicionar o video aos favoritos no store + LocalStorage
function addFavorito(video: Video) {
  adicionarFavorito(video)
  $toast.success(`${video.descricao} - foi adicionado aos favoritos`);
}

// Excluir o video
async function excluirVideo() {
  try {
    await $fetch(`/api/v1/videos/${route.params.id}`, {
      method: "DELETE",
    });
    $toast.success("Video excluído com sucesso!");
    setTimeout(() => {
      router.push("/videos");
    }, 2000)
  } catch (error) {
    $toast.error("Erro ao excluir o video");
    console.log(error)
  }
}

// Editar informações do vídeo
async function editarVideo() {
  try {
    await $fetch(`/api/v1/videos/${route.params.id}`, {
      method: "PUT",
      body: stateForm,
    });

    $toast.success("Vídeo atualizado com sucesso!");
    setTimeout(() => {
      router.push("/videos");
    }, 2000)

  } catch (error) {
    $toast.error("Erro ao atualizar o vídeo");
    console.log(error)
  }
}
</script>
