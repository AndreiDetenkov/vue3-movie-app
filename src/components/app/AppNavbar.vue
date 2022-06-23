<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import type { MenuInterface } from '@/components/app/types'

const { t } = useI18n()

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
      <div class="flex items-center justify-center h-12 divide-x">
        <router-link
          v-for="item in menu"
          :key="item.title"
          :to="item.url"
          class="w-32 text-center font-medium hover:text-pink-600 transition duration-300 ease-in-out"
          active-class="text-pink-600 underline"
        >
          {{ item.title }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

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
