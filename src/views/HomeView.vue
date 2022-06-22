<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  {{ t('movies') }}
</template>

<i18n>
{
  "en": {
    "movies": "movies"
  },
  "ru": {
    "movies": "фильмы"
  }
}
</i18n>
