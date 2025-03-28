<template>
  <div @click="selectNote(note)" class="bg-white rounded-lg border border-gray-200 p-4 mb-4">
    <div class="flex justify-between items-start mb-4">
      <h3 class="text-lg font-semibold text-gray-800">{{ note.title }}</h3>
      <div class="flex gap-2">
        <button class="text-gray-400 hover:text-gray-600">
          <Icon size="20" name="ph:heart" />
        </button>
      </div>
    </div>

    <p class="text-gray-600 text-sm mb-4">{{ note.content }}</p>

    <div class="flex flex-wrap gap-2 mb-4">
      <NoteCardTag v-for="tag in note.tags" :key="tag" :tag="tag" />
    </div>

    <div class="flex justify-between items-center text-xs text-gray-500">
      <span>{{ new Date().toLocaleString() }}</span>
      <div class="flex gap-2">
        {{ note.id ?? 'Sin ID' }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Note } from '~/types/notes'
defineProps<{ note: Note }>()
const emit = defineEmits<{
  (e: 'select-note', note: Note): void
}>()
const selectNote = (note: Note) => {
  emit('select-note', note)
}
</script> 