<script setup lang="ts">
import { useMovie } from '@/composables/useMovie'
import SectionTitle from '@/components/shared/section/SectionTitle.vue'
import SectionGrid from '@/components/shared/section/SectionGrid.vue'
import { defineAsyncComponent } from 'vue'

const CardMain = defineAsyncComponent({
  loader: () => import('@/components/shared/card/CardMain.vue'),
})

const { movies } = useMovie()
</script>

<template>
  <div class="page-container">
    <section
      v-for="movieKey in Object.keys(movies)"
      :key="movieKey"
      class="mb-20"
    >
      <section-title :title="movieKey" />
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
