<script setup lang="ts">
import { IMG_URL } from '@/utils/config'
import type { MovieInterface } from '@/components/movies/types'

defineProps<{
  movie: MovieInterface
}>()
</script>

<template>
  <div class=".card">
    <img
      :src="`${IMG_URL}/t/p/w500/${movie.poster_path}`"
      alt="poster image"
      class="card__image"
    />
    <div class="card__content">
      {{ movie.title }}
      {{ movie.vote_average }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  @apply shadow-2xl rounded-b-md;

  &__image {
    @apply rounded-t-md;
  }

  &__content {
    @apply p-2 font-medium;
  }
}
</style>
