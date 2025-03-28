<template>
  <div class="flex h-screen">
    <Sidebar />
    <Splitpanes class="default-theme" style="width: 100%">
      <Pane min-size="30">
        <NoteList :notes="notelist" :isLoading="isLoading" @create-note="createNote" @select-note="selectNote" />
      </Pane>
      <Pane min-size="30" v-if="selectedNote">
        <NoteDetail
          :note="selectedNote"
          @update-note="updateNote"
        />
      </Pane>
    </Splitpanes>
  </div>
</template>

<script setup lang="ts">
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import Sidebar from '~/components/Sidebar.vue'
import NoteList from '~/components/NoteList.vue'
import NoteDetail from '~/components/NoteDetail.vue'
import { type Note } from '~/types/notes'
import { useCookie } from 'nuxt/app'
import { type User } from '~/types/users'

const isLoading = ref(true)
const selectedNote = ref<Note | null>(null)
const notelist = ref<Note[]>([])
const token = useCookie('token')
const user = useCookie('user') as Ref<User>

const fetchNotes = async () => {
  isLoading.value = true
  const response = await fetch('http://localhost:5000/api/notes', {
    headers: {
      Authorization: `Bearer ${token.value}`
    }
  })
  const data = await response.json()
  notelist.value = data as Note[]
  isLoading.value = false
}

const createNote = async () => {
  isLoading.value = true
  const response = await fetch('http://localhost:5000/api/notes', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token.value}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newNote.value)
  })
  const data = await response.json()
  fetchNotes()
  isLoading.value = false
}

const selectNote = (note: Note) => {
  selectedNote.value = note
}

const updateNote = (note: Note) => {
  const index = notelist.value.findIndex(n => n.id === note.id)
  if (index !== -1) {
    notelist.value[index] = note
  }
}

const newNote = ref<Omit<Note, 'deletedAt'>>({
  id: 0,
  title: 'Nota nueva!',
  content: 'Escribe algo aqui!',
  tags: [],
  favorite: false,
  userId: user.value.id
})

onMounted(async () => {
  await fetchNotes()
})

definePageMeta({
  layout: 'default',
  middleware: ['auth']
})
</script>

<style>
.splitpanes__pane {
  overflow-y: auto;
}
.splitpanes__splitter {
  background-color: #e5e7eb;
  position: relative;
}
.splitpanes__splitter:hover {
  background-color: #d1d5db;
}
.splitpanes__splitter::before {
  content: "";
  position: absolute;
  left: -2px;
  right: -2px;
  top: 0;
  bottom: 0;
  cursor: col-resize;
}
</style> 