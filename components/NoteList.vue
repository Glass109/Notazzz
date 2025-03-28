<template>
  <div class="flex-1 bg-gray-50">
    <!-- Header -->
    <header class="bg-white border-b border-gray-200 p-4">
      <div class="flex items-center justify-between">
        <div class="flex-1 max-w-xl">
          <div class="relative">
            <Icon name="ph:magnifying-glass" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" 
                   placeholder="Search" 
                   class="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-pink-500" />
          </div>
        </div>
        <div class="flex items-center gap-4">
          <button @click="$emit('create-note')" class="p-2 text-pink-500 hover:bg-pink-50 rounded-lg">
            <Icon name="ph:plus" />
          </button>
          <button class="p-2 text-gray-400 hover:bg-gray-50 rounded-lg">  
            <Icon name="ph:dots-three-horizontal" />
          </button>
        </div>  
      </div>
    </header>

    <!-- Notes Grid -->
    <div class="p-6">
      <div v-if="notes.length > 0" class="grid gap-4">
        <NoteCard v-for="note in notes"
                 :key="note.id"
                 :note="note"
                 @select-note="$emit('select-note', note)" />
      </div>
      <div v-else class="flex justify-center items-center h-full">
        <p class="text-gray-400">No hay notas</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import NoteCard from './NoteCard.vue'
import { type Note } from '~/types/notes'

const props = defineProps<{notes: Note[]}>()
</script> 