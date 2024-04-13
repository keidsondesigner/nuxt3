<template>
  <div class="conatiner-principal m-8">
    <div class="flex justify-between mb-8 items-end">
      <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Adicionar vídeo
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
    <form
      class="max-w-md mx-auto"
      @submit.prevent="onSubmit"
    >
      <FormField
        v-slot="{ componentField }"
        name="descricao"
      >
        <FormItem>
          <FormLabel>Descrição</FormLabel>
          <FormControl>
            <Input type="text" placeholder="Digite a descricão" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField
        v-slot="{ componentField }"
        name="url"
      >
        <FormItem>
          <FormLabel>Url</FormLabel>
          <FormControl>
            <Input type="text" placeholder="Digite um embed url do vídeo" v-bind="componentField" />
            <span class="text-sm text-red-500 opacity-50">
              Use neste formato "embed", exemplo do link:
              <br>> https://www.youtube.com/watch?v=ak42SKewNQM
              <br>> https://www.youtube.com/embed/ak42SKewNQM
            </span>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button
        class="mt-4 gap-2"
        type="submit"
      >
        Salvar
        <Save />
      </Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ChevronLeft, Save } from 'lucide-vue-next';
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = toTypedSchema(z.object({
  descricao: z.string().min(2),
  url: z.string().min(2),
}))

const form = useForm({
  validationSchema: formSchema,
})

const router = useRouter();
const { $toast } = useNuxtApp();


const onSubmit = form.handleSubmit(async (values) => {
  try {
    await $fetch("/api/v1/videos", {
      method: "POST",
      body: values,
    });
    $toast.success("Vídeo salvo com sucesso!");

    setTimeout(() => {
      router.push("/videos");
    }, 500)
  } catch (error) {
    $toast.error("Erro ao salvar o vídeo");
    throw createError({
      statusCode: 500,
      statusMessage: "Erro ao salvar o vídeo",
    })
  }
})

</script>
