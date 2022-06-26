<script setup lang="ts">
import { useAxios } from '@vueuse/integrations/useAxios'
import MovieCard from '@/components/movies/MovieCard.vue'
import { http_method, http_url } from '@/api/types'

const { data } = useAxios(http_url.popularMovie, {
  method: http_method.GET,
})
</script>

<template>
  <div class="page-container">
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
  @apply text-3xl font-bold mb-12 pb-1 border-b;
}
.content-grid {
  @apply grid
    2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2
    gap-4 lg:gap-x-8 lg:gap-y-12;
}
</style>
