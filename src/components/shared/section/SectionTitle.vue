<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <h2
    class="text-3xl text-gray-800 font-bold mb-8 pb-1 border-b border-b-gray-800"
  >
    {{ title }}
  </h2>
</template>
