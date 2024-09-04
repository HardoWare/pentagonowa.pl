<script setup lang="ts">
const { t } = useI18n()
const cons = [
  { icon: 'i-fa6-solid-server', text: `${t('pages.about.pros.1')}` },
  { icon: 'i-fa6-solid-face-grin-beam', text: `${t('pages.about.pros.2')}` },
  { icon: 'i-fa6-solid-wheelchair', text: `${t('pages.about.pros.3')}` },
  { icon: 'i-fa6-solid-building', text: `${t('pages.about.pros.4')}` },
  { icon: 'i-fa6-solid-address-book', text: `${t('pages.about.pros.5')}` },
  { icon: 'i-fa6-solid-sheet-plastic', text: `${t('pages.about.pros.6')}` },
]
const text = [
  { title: `${t('pages.about.about')}`, text: `${t('pages.about.about-text')}` },
  { title: `${t('pages.about.our-team')}`, text: `${t('pages.about.team-text')}` },
  { title: `${t('pages.about.join-team')}`, text: `${t('pages.about.join-text')}` },
]
</script>

<template>
<div class="w-full min-h-[80vh] md:h-full pt-28 pb-10">
  <div class="w-10/12 mx-auto h-full grid md:grid-cols-2 gap-6">
    <div class="flex flex-col gap-5">
      <div class="text-3xl text-center">
        {{ $t('pages.about.serv-pros') }}
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
        <UCard v-for="item in cons" :ui="{ base: '!bg-opacity-60', ring: 'dark:ring-0' , rounded:'rounded-2xl', background: 'dark:bg-gray-900', body: { padding: 'py-2 px-2 sm:px-3' } }">
          <UButton :icon="item.icon" variant="ghost" class="text-xl self-center">
            {{ item.text }}
          </UButton>
        </UCard>
      </div>
    </div>
    <div class="flex flex-col justify-between gap-3">
      <div v-for="item in text" class="px-4 py-2  bg-gray-900 bg-opacity-60 rounded-2xl ring-0">
        <p class="text-3xl text-center">{{ item.title }}</p>
        <p class="text-xl">{{ item.text }}</p>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>