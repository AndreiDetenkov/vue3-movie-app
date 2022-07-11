<script setup lang="ts">
import { IMG_URL } from '@/utils/config'
import type { MovieInterface } from '@/components/movies/types'
import MovieCardRate from '@/components/movies/MovieCardRate.vue'

defineProps<{
  movie: MovieInterface
}>()
</script>

<template>
  <div class="card">
    <img
      :src="`${IMG_URL}/t/p/w500/${movie.poster_path}`"
      alt="poster image"
      class="card__image"
    />
    <p class="card__title">{{ movie.title }}</p>
    <p class="card__info">{{ movie.release_date }} &#x2022;</p>
    <movie-card-rate :rate="movie.vote_average" />
  </div>
</template>

<style scoped lang="scss">
.card {
  @apply relative cursor-pointer;

  &__image {
    @apply rounded-md mb-3;
  }

  &__title {
    @apply text-lg font-bold truncate mb-1 hover:underline;
  }

  &__info {
    @apply font-medium text-xs text-gray-500;
  }
}
</style>
