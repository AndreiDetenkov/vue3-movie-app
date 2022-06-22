<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

interface MenuInterface {
  title: string
  url: string
}
const menu = computed<MenuInterface[]>(() => {
  return [
    { title: t('movies'), url: '/movies' },
    { title: t('tv'), url: '/tv-series' },
  ]
})
</script>

<template>
  <nav class="border-b">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-center h-16 divide-x">
        <router-link
          v-for="item in menu"
          :key="item.title"
          :to="item.url"
          class="w-32 text-center"
          active-class="text-pink"
        >
          {{ item.title }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss"></style>

<i18n>
{
  "en": {
    "movies": "Movies",
    "tv": "TV Shows"
  },
  "ru": {
    "movies": "Фильмы",
    "tv": "Сериалы"
  }
}
</i18n>
