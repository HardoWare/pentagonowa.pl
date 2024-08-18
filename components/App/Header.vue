<script setup lang="ts">
import type { HorizontalNavigationLink, VerticalNavigationLink } from "#ui/types"
import type { Ref } from "vue";

const { t, locale } = useI18n()

const links1 = <HorizontalNavigationLink[][] | VerticalNavigationLink[][]> [
  [
    { label: `${t('header.home')}`, to: `/${locale.value}`, icon: 'i-fa6-solid-house', target: '_self' },
    { label: `${t('header.about')}`, to: `/${locale.value}/about`, icon: 'fa6-solid-spaghetti-monster-flying', target: '_self' },
    { label: `${t('header.team')}`, to: `/${locale.value}/team`, icon: 'i-fa6-solid-users', target: '_self' },
  ],
]

const links2 = <HorizontalNavigationLink[][] | VerticalNavigationLink[][]> [
  [
    // { label: `${t('header.servers')}`, to: `/${locale.value}/servers`, icon: 'i-fa6-solid-server', target: '_self' },
    // { label: `Discord`, to: `/${locale.value}/discord`, icon: 'ic-round-discord', target: '_self' },
    // { label: `${t('header.contact')}`, to: `/${locale.value}/contact`, icon: 'i-fa6-solid-briefcase', target: '_self' },
    { label: `FREEROAM`, to: `/${locale.value}/fr`, avatar: { src: '/img/logo/logo-fp.png' }, target: '_self' },
    { label: `ROLEPLAY`, to: `/${locale.value}/rp`, avatar: { src: '/img/logo/logo-rp.png' }, target: '_self' },
    { label: `FR x RP`, to: `/${locale.value}/frxrp`, avatar: { src: '/img/logo/logo-frp.png' }, target: '_self' },
  ],
]

const slideRef: Ref<boolean> = ref(false)

watch(() => useRoute().path, () => {
  slideRef.value = false
})
</script>

<template>
<div class="absolute w-full h-28">
  <div class="md:hidden w-full py-2 px-4 flex justify-between">
    <NuxtLinkLocale to="/" class="w-20">
      <NuxtImg src="/img/logo/logo.png" alt="logo" format="webp" />
    </NuxtLinkLocale>
    <div class="flex justify-center">
      <div class="w-fit h-fit self-center">
        <UButton icon="i-fa6-solid-bars" variant="ghost" size="xl" @click="slideRef = true" />
      </div>
    </div>
  </div>
  <div class="hidden md:grid w-full lg:w-4/5 xl:w-3/4 mx-auto grid-cols-5 ">
    <UHorizontalNavigation :ui="{ wrapper: 'justify-end col-span-2' }" :links="links1" />
    <div class="flex justify-center">
      <NuxtLinkLocale to="/" class="w-20">
        <NuxtImg src="/img/logo/logo.png" alt="logo" format="webp" />
      </NuxtLinkLocale>
    </div>
    <UHorizontalNavigation :ui="{ wrapper: 'justify-start col-span-2' }" :links="links2" />
  </div>
  <USlideover v-model="slideRef">
    <div class="w-full h-full flex flex-col">
      <div class="w-full h-28 flex flex-row justify-between py-2 px-4">
        <NuxtLinkLocale to="/" class="w-20">
          <NuxtImg src="/img/logo/logo.png" alt="logo" format="webp" />
        </NuxtLinkLocale>
        <div class="flex justify-end">
          <div class="w-fit h-fit self-center">
            <UButton icon="i-fa6-solid-x" variant="ghost" size="xl" @click="slideRef = false" />
          </div>
        </div>
      </div>
      <UDivider />
      <UVerticalNavigation :links="links1.concat(links2)" />
    </div>
  </USlideover>
</div>
</template>

<style scoped>

</style>