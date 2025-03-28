<template>
  <div>
    <div class="flex items-center gap-1 user-select-none bg-gray-100 text-gray-600 rounded-full px-2 py-1 text-sm hover:bg-gray-200 cursor-default   transition-colors duration-200">
      <Icon :name="iconmappings(tag)" />
      {{ tag }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import iconmappings from '@/utils/iconmappings'

const props = defineProps<{
  tag: string
}>()


</script>

<style>

</style>