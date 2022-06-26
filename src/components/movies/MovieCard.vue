<script setup lang="ts">
import { IMG_URL } from '@/utils/config'
import type { MovieInterface } from '@/components/movies/types'

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
    <div class="rate">{{ movie.vote_average }}</div>
    <p class="card__title">{{ movie.title }}</p>
    <p class="card__info">{{ movie.release_date }} &#x2022;</p>
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

.rate {
  @apply w-8 h-8 absolute bottom-14 -right-2 bg-orange-500 text-sm text-white font-bold rounded-full flex items-center justify-center;
}
</style>
