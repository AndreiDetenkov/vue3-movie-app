<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <h2 class="text-3xl font-bold mb-8 pb-1 border-b">{{ title }}</h2>
</template>
