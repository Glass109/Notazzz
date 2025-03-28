<template>
  <div class="h-screen bg-white border-l border-gray-200">
    <div class="p-4 border-b border-gray-200">
      <div class="flex items-center justify-between mb-4">
        <input
          type="text"
          v-model="note.title"
          class="text-xl font-semibold bg-transparent focus:outline-none focus:border-b-2 focus:border-pink-500"
          :placeholder="'Sin título'"
        />
        <div class="flex items-center gap-2">
          <button class="p-2 text-gray-400 hover:text-gray-600 rounded-lg">
            <Icon name="ph:heart" />
          </button>
          <button class="p-2 text-gray-400 hover:text-gray-600 rounded-lg">
            <Icon name="ph:dots-three-vertical" />
          </button>
        </div>
      </div>
      
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in note.tags"
          :key="tag"
          class="px-2 py-1 bg-gray-100 text-sm text-gray-600 rounded-full flex items-center gap-1"
        >
          {{ tag }}
          <button class="text-gray-400 hover:text-gray-600">
            <Icon name="ph:x" class="w-4 h-4" />
          </button>
        </span>
        <button
          class="px-2 py-1 text-sm text-pink-500 hover:bg-pink-50 rounded-full flex items-center gap-1"
          @click="addTag"
        >
          <Icon name="ph:plus" class="w-4 h-4" />
          Agregar etiqueta
        </button>
      </div>
    </div>

    <div class="p-4">
      <textarea
        v-model="note.content"
        class="w-full h-[calc(100vh-200px)] resize-none bg-transparent focus:outline-none"
        :placeholder="'Empieza a escribir...'"
      ></textarea>
    </div>

    <div class="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
      <div class="flex justify-between items-center text-xs text-gray-500">
        <span>Última modificación: {{ new Date().toLocaleString() }}</span>
        <div class="flex items-center gap-4">
          <button class="hover:text-gray-700 flex items-center gap-1">
            <Icon name="ph:clock-counter-clockwise" class="w-4 h-4" />
            Historial
          </button>
          <button class="hover:text-gray-700 flex items-center gap-1">
            <Icon name="ph:share" class="w-4 h-4" />
            Compartir
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { type Note } from '~/types/notes'
const props = defineProps<{note: Note}>()

const newTag = ref('')

const addTag = () => {
  let tag = prompt('Ingrese el nombre de la etiqueta')
  if (tag) {
    props.note.tags.push(tag)
  }
}
</script> 