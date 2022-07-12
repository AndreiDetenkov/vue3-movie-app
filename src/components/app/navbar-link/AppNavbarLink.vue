<script setup lang="ts">
type NavItem = {
  title: string
  url: string
}

defineProps<{
  item: NavItem
}>()
</script>

<template>
  <router-link
    :to="item.url"
    class="w-32 h-12 flex items-center justify-center text-center font-medium hover:text-orange-500 transition duration-300 ease-in-out"
    active-class="text-orange-500 border-b-orange-500 border-b-2"
  >
    {{ item.title }}
  </router-link>
</template>
