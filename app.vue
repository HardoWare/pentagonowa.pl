<script setup lang="ts">
const appConfig = useAppConfig()
const colors: { [key: string]: string } = {
	'/frxrp': 'penta-red',
	'/fr': 'penta-green',
	'/rp': 'penta-blue',
}
watch(() => useRoute().path, (newPath, oldPath) => {
	const foundColorKey = Object.keys(colors).find(key => newPath.includes(key))
	appConfig.ui.primary = foundColorKey ? colors[foundColorKey] : 'penta-white'
}, { immediate: true, deep: true })
</script>

<template>
  <div class="relative w-screen max-w-full h-screen max-h-full bg-gray-800 main-bg overflow-x-hidden text-penta-white-100">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <USlideovers />
  </div>
</template>

<style scoped>
.main-bg {
  background-image: url("/img/bg/bg-all.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* todo na razie bg div */
}

</style>
