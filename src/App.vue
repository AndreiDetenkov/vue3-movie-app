<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/app/navbar/AppNavbar.vue'
</script>

<template>
  <app-navbar />
  <RouterView />
</template>

<style>
@import '@/assets/base.css';
</style>
