<script setup lang="ts">
import { IMG_URL } from '@/utils/config'

interface MovieInterface {
  title: string
  poster_path: string
  vote_average: number
}

defineProps<{
  movie: MovieInterface
}>()
</script>

<template>
  <div class="shadow-xl rounded-b-md">
    <img
      :src="`${IMG_URL}/t/p/w500/${movie.poster_path}`"
      alt="movie's poster image"
      class="rounded-t-md"
    />
    <div class="p-2 font-medium">
      {{ movie.title }}
      {{ movie.vote_average }}
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
