<script setup lang="ts">
import { useAxios } from '@vueuse/integrations/useAxios'
import { http_method, http_url } from '@/api/types'
import CardMain from '@/components/shared/card/CardMain.vue'
import PageTitle from '@/components/shared/page/PageTitle.vue'
import PageGrid from '@/components/shared/page/PageGrid.vue'

const { data } = useAxios(http_url.popularMovie, {
  method: http_method.GET,
})
</script>

<template>
  <div class="page-container">
    <page-title title="Popular" />

    <page-grid>
      <card-main
        v-for="movie in data?.results"
        :key="movie.id.toString()"
        :movie="movie"
      />
    </page-grid>
  </div>
</template>
