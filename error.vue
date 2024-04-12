<template>
  <div
    class="h-screen w-full flex flex-col justify-center items-center"
  >
    <h1 class="text-8xl font-bold text-green-600">{{ error.statusCode }}</h1>
    <p class="text-2xl font-light text-green-600 my-4">
      {{ error.statusMessage }}
    </p>
    <Button
        class="mt-4 gap-2"
        @click="voltarHome"
      >
        Ir para a Home
        <ChevronLeft />
      </Button>
  </div>
</template>

<script setup>
import { ChevronLeft } from 'lucide-vue-next';

defineProps({
  error: {
    default: {
      url: "",
      statusCode: 0,
      statusMessage: "",
      message: "",
      description: "",
      data: {},
    },
  },
});

const voltarHome = () => clearError({ redirect: "/" });
</script>