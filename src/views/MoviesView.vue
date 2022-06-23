<script setup lang="ts">
import { useAxios } from '@vueuse/integrations/useAxios'
import MovieCard from '@/components/movies/MovieCard.vue'

const { data } = useAxios('/movie/popular', {
  method: 'GET',
})
</script>

<template>
  <div class="container mx-auto p-4">
    <h2 class="title">Popular</h2>
    <div class="content-grid">
      <movie-card
        v-for="movie in data?.results"
        :key="movie.id.toString()"
        :movie="movie"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  @apply text-2xl font-bold mb-8;
}
.content-grid {
  @apply grid
    2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2
    gap-4 lg:gap-x-8 lg:gap-y-16;
}
</style>
