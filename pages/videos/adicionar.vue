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
      class="max-w-sm mx-auto"
      @submit="onSubmit"
    >
      <FormField v-slot="{ componentField }" name="descricao">
        <FormItem>
          <FormLabel>Descrição</FormLabel>
          <FormControl>
            <Input type="text" placeholder="Digite a descricão" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="url">
        <FormItem>
          <FormLabel>Url</FormLabel>
          <FormControl>
            <Input type="text" placeholder="Digite uma url" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button
        class="mt-4"
        type="submit"
      >
        Enviar
      </Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ChevronLeft } from 'lucide-vue-next';
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

const onSubmit = form.handleSubmit((values) => {
  console.log('Form enviado!', values)
})
</script>
