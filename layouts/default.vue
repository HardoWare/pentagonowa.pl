<script setup lang="ts">
import type { ComputedRef } from "vue";

const route = useRoute()
const bgStyles: ComputedRef<string> = computed(() => {
  const currentPath = route.path.split('/').reverse().find((path) => path !== '')
  if (currentPath === 'fr') {
    return `backdrop-filter: sepia(0.8) saturate(2.4) brightness(0.9) contrast(1.1) hue-rotate(100deg);`
  } else if (currentPath === 'rp') {
    return `backdrop-filter: sepia(0.9) saturate(3.3) brightness(0.9) contrast(1.1) hue-rotate(180deg);`
  } else if (currentPath === 'frxrp') {
    return `backdrop-filter: sepia(0.8) saturate(3.3) brightness(0.9) contrast(1.1) hue-rotate(325deg);`
  }
  return `backdrop-filter: sepia(0) saturate(1) brightness(1) contrast(1.1) hue-rotate(0deg);`
})

</script>

<template>
  <div class="w-full h-full" :style="bgStyles">
    <AppHeader />
    <main class="w-full min-h-[80vh] h-full max-h-full ">
      <slot />
    </main>
  </div>
</template>

<style scoped>

</style>