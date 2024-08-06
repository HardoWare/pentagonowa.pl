<script setup lang="ts">
import colors from '#tailwind-config/theme/colors'
const appConfig = useAppConfig()
const colorMode = useColorMode()

// const pentaColors = computed(() => appConfig.ui.colors.filter(value => ))
// console.log(colors)
// const primaryColors = computed(() => appConfig.ui.colors.filter(color => color !== 'primary').map(color => ({ value: color, text: color, hex: colors[color][colorMode.value === 'dark' ? 400 : 500] })))
// console.log(primaryColors)
</script>

<template>
  <div class="relative w-screen max-w-full h-screen max-h-full bg-gray-800 main-bg overflow-x-hidden ">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <USlideovers />
  </div>
</template>

<style scoped>
.main-bg {
  background-image: url("/img/bg/bg-all.jpg");
  background-size: 100% 100%;
  /* todo na razie bg div */
}
</style>
