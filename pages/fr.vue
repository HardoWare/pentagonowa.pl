<script setup lang="ts">
const { setAsyncInterval, clearAsyncInterval } = useAsyncInterval()

const currentPeopleOnServer: Ref<number | undefined> = ref(0)
const loading = ref(true)
const error = ref(false)
const interval = ref(0)

onMounted(() => {
  interval.value = setAsyncInterval(async () => {
    try {
      currentPeopleOnServer.value = await $fetch('/api/currentPlayers', { query: {'server':'fr'} })
    } catch (e) {
      error.value = true
      clearAsyncInterval(interval.value)
    } finally {
      loading.value = false
    }
  }, 60000)
})
onBeforeUnmount(() => {
  clearAsyncInterval(interval.value)
})
</script>

<template>
  <div class="w-full h-full pt-28">
    <div class="h-full grid grid-cols-2 lg:grid-cols-4 gap-2">
      <div class="flex justify-center  col-span-2 sm:col-span-1 order-first">
        <div class="self-center inline">
          <UButton icon="i-fa6-solid-angle-right" :label="$t('pages.index.server')" variant="ghost" size="xl" class="w-fit h-fit" />
        </div>
      </div>
      <div class="flex justify-center col-span-2 order-none">
<!--        <NuxtImg src="/img/main3.png" format="webp" placeholder class="object-cover rounded-[13rem]" />-->
      </div>
      <div class="flex justify-center col-span-2 sm:col-span-1 -order-1 lg:order-last">
        <div class="self-center">
          <p class="text-3xl"> {{ $t('pages.index.currently-on-server') }} </p>
          <UButton v-if="!error" icon="i-fa6-solid-angle-right"
                   :label="currentPeopleOnServer?.toString()"
                   :loading="loading"
                   disabled
                   variant="ghost" size="xl" class="w-fit h-fit text-3xl" />
          <UBadge v-else class="text-3xl"> {{ $t('pages.index.api-error') }} </UBadge>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>