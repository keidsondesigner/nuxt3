<template>
  <div
    class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col"
  >
    <div class="text-center">
      <NuxtLink 
        to="/videos/adicionar">
        <Button
          class="pl-6 mb-10 mt-16 border border-primary hover:bg-primary-600 rounded-full text-primary"
          variant="outline"
        >
          Adicionar vídeo
          <ChevronRight />
        </Button>
      </NuxtLink>
      <h1 class="text-5xl font-bold tracking-tighttext-white sm:text-7xl">
        Nuxt um intuitivo<br />
        <span class="text-primary block lg:inline-block">
          Vue Framework
        </span>
      </h1>
      <p class="mt-6 text-lg tracking-tight text-gray-300">
        O Nuxt é uma estrutura de código aberto que torna o desenvolvimento da Web intuitivo e avançado.<br />
        Crie aplicativos e sites Web completos com desempenho e grau de produção com confiança.
      </p>
      <div class="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center">
        <NuxtLink to="/videos/favoritos">
          <Button
            class="gap-2"
            variant="default"
          >
            <Rocket />
            Favoritar vídeo
          </Button>
        </NuxtLink>
        <NuxtLink to="/videos">
          <Button
            class="gap-2"
            variant="secondary"
          >
            <MonitorPlay />
            Listar vídeos
          </Button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MonitorPlay, Rocket, ChevronRight } from 'lucide-vue-next';
</script>
