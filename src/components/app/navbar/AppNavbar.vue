<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import type { MenuInterface } from '@/components/app/types'
import { web_route } from '@/utils/web-config'
import AppNavbarLink from '@/components/app/navbar-link/AppNavbarLink.vue'

const { t } = useI18n()

const menu = computed<MenuInterface[]>(() => {
  return [
    { title: t('home'), url: web_route.home },
    { title: t('movies'), url: web_route.movies },
    { title: t('tv'), url: web_route.tvSeries },
  ]
})
</script>

<template>
  <nav class="h-12 shadow-xl">
    <div class="container mx-auto">
      <div class="flex justify-center">
        <app-navbar-link v-for="item in menu" :key="item.title" :item="item" />
      </div>
    </div>
  </nav>
</template>

<i18n>
{
  "en": {
    "home": "Home",
    "movies": "Movies",
    "tv": "TV Shows"
  },
  "ru": {
    "home": "Главная",
    "movies": "Фильмы",
    "tv": "Сериалы"
  }
}
</i18n>
