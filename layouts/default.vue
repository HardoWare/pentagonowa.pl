<script setup lang="ts">
import type { ComputedRef } from "vue"
const route = useRoute()
const styles: {[key: string]: string} = {
  fr: 'backdrop-filter: sepia(0.8) saturate(2.4) brightness(0.9) contrast(1.1) hue-rotate(100deg);',
  rp: 'backdrop-filter: sepia(0.9) saturate(3.3) brightness(0.9) contrast(1.1) hue-rotate(180deg);',
  frxrp: 'backdrop-filter: sepia(0.8) saturate(3.3) brightness(0.9) contrast(1.1) hue-rotate(325deg);',
  default: 'backdrop-filter: sepia(0) saturate(1) brightness(1) contrast(1.1) hue-rotate(0deg);',
}
const bgStyles: ComputedRef<string> = computed(() => {
  return styles[Array.isArray(route.params.server) ? route.params.server[0] : route.params.server] ?? styles.default
})
</script>

<template>
  <div class="w-full max-h-full h-full overflow-hidden" :style="bgStyles">
    <AppHeader />
    <main class="w-full min-h-[60vh] h-full max-h-full overflow-auto">
      <slot />
    </main>
  </div>
</template>

<style scoped>

</style>