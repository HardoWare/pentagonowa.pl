<script setup lang="ts">
import type { HorizontalNavigationLink, VerticalNavigationLink } from "#ui/types"
import type { Ref } from "vue";

const { t, locale } = useI18n()

const links = <HorizontalNavigationLink[][] | VerticalNavigationLink[][]> [
  [
    { label: `${t('header.home')}`, to: `/${locale.value}`, icon: 'i-fa6-solid-house', target: '_self' },
    { label: `${t('header.about')}`, to: `/${locale.value}/about`, icon: 'fa6-solid-spaghetti-monster-flying', target: '_self' },
    { label: `${t('header.team')}`, to: `/${locale.value}/team`, icon: 'i-fa6-solid-users', target: '_self' },
  ],
    [{ to: `/${locale.value}`, target: '_self', avatar: '/img/logo/logo.png', active: false, class: '123123123' },], // todo disable hover
  [
    { label: `${t('header.servers')}`, to: `/${locale.value}/servers`, icon: 'i-fa6-solid-server', target: '_self' },
    { label: `Discord`, to: `/${locale.value}/discord`, icon: 'ic-round-discord', target: '_self' },
    { label: `${t('header.contact')}`, to: `/${locale.value}/contact`, icon: 'i-fa6-solid-briefcase', target: '_self' },
  ],
]
const uiNav = {
  wrapper: ' ',
  // base: ' py-0',
  avatar: {
    base: ' '
  },
}

const slideRef: Ref<boolean> = ref(false)

watch(() => useRoute().path, () => {
  slideRef.value = false
})
</script>

<template>
<div class="absolute w-full h-28">
  <div class="lg:hidden w-full py-2 px-4 flex justify-between">
    <div class="w-20">
      <NuxtImg src="/img/logo/logo.png" alt="logo" format="webp" />
    </div>
    <div class="flex justify-center">
      <div class="w-fit h-fit self-center">
        <UButton icon="i-fa6-solid-bars" variant="ghost" size="xl" @click="slideRef = true" />
      </div>
    </div>
  </div>
  <div class="hidden lg:block w-3/4 mx-auto">
    <UHorizontalNavigation :ui="uiNav" :links="links" >
      <template #avatar="{ link }">
        <div class="w-20 align-baseline " v-if="link.avatar">
          <NuxtImg :src="link.avatar" alt="logo" format="webp"  />
        </div>
      </template>
    </UHorizontalNavigation>
  </div>
  <USlideover v-model="slideRef">
    <div class="w-full h-full flex flex-col">
      <div class="w-full h-28 flex flex-row justify-between py-2 px-4">
        <div class="w-20">
          <NuxtImg src="/img/logo/logo.png" alt="logo" format="webp" />
        </div>
        <div class="flex justify-end">
          <div class="w-fit h-fit self-center">
            <UButton icon="i-fa6-solid-x" variant="ghost" size="xl" @click="slideRef = false" />
          </div>
        </div>
      </div>
      <UDivider />
      <UVerticalNavigation :links="links" />
    </div>
  </USlideover>
</div>
</template>

<style scoped>

</style>