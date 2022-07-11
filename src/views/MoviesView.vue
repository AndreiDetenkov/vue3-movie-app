<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useMovie } from '@/composables/useMovie'
import CardMain from '@/components/shared/card/CardMain.vue'
import SectionTitle from '@/components/shared/section/SectionTitle.vue'
import SectionGrid from '@/components/shared/section/SectionGrid.vue'

onBeforeMount(() => {
  getAllMovies()
})

const { getAllMovies, movies } = useMovie()
</script>

<template>
  <div class="page-container">
    <section
      v-for="movieKey in Object.keys(movies)"
      :key="movieKey"
      class="mb-20"
    >
      <section-title title="Popular" />
      <section-grid>
        <card-main
          v-for="movie in movies[movieKey]"
          :key="movie.id.toString()"
          :movie="movie"
        />
      </section-grid>
    </section>
  </div>
</template>
