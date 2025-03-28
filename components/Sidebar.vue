<template>
  <aside class="w-64 h-screen bg-white border-r border-gray-200">
    <!-- Logo -->
    <div class="p-4">
      <div class="flex items-center gap-2">
        <img src="/images/stickynote.png" alt="NoteMe" class="h-8 w-8" />
        <h1 class="text-xl font-semibold">NoteMe</h1>
      </div>
    </div>

    <!-- User Info -->
    <div class="px-4 py-2 border-b border-gray-200">
      <div class="flex items-center gap-2">
        <img :src="user.avatar" alt="User avatar" class="h-8 w-8 rounded-full" />
        <div>
          <p class="text-sm font-medium">{{ user.name }}</p>
          <p class="text-xs text-gray-500">{{ user.email }}</p>
        </div>
      </div>
    </div>

    <!-- Quick Links -->
    <nav class="p-4">
      <h2 class="text-sm font-medium text-gray-500 mb-2">Quick links</h2>
      <ul class="space-y-1">
        <li>
          <a href="#" class="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-100">
            <Icon name="ph:note-blank" class="text-gray-500" />
            All
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-100">
            <Icon name="ph:heart" class="text-gray-500" />
            Favorites
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-100">
            <Icon name="ph:trash" class="text-gray-500" />
            Recently deleted
          </a>
        </li>
      </ul>
    </nav>

    <!-- Tags -->
    <div class="p-4">
      <h2 class="text-sm font-medium text-gray-500 mb-2">Tags</h2>
      <ul class="space-y-1">
        <li>
          <a href="#" class="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-100">
            <Icon name="ph:graduation-cap" class="text-gray-500" />
            School
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-100">
            <Icon name="ph:check-circle" class="text-gray-500" />
            Chores
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-100">
            <Icon name="ph:calendar" class="text-gray-500" />
            Weekend
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-100 text-pink-500">
            <Icon name="ph:plus" />
            New tag
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
const user = {
  name: 'User Someuser',
  email: 'example@gmail.com',
  avatar: 'https://via.placeholder.com/32'
}
</script> 