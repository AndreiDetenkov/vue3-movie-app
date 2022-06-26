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
  <nav class="nav">
    <div class="nav__container">
      <div class="menu">
        <router-link
          v-for="item in menu"
          :key="item.title"
          :to="item.url"
          class="menu__link"
          active-class="active"
        >
          {{ item.title }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  @apply h-12 border-b;

  &__container {
    @apply container mx-auto;
  }
}

.menu {
  @apply flex justify-center;

  &__link {
    @apply w-32 h-12
      flex items-center justify-center
      text-center font-medium
      hover:text-pink-600 transition duration-300 ease-in-out;
  }
}

.active {
  @apply text-pink-600 border-b-pink-600 border-b-2;
}
</style>

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
