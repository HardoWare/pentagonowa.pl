<script setup lang="ts">
const { t, locale } = useI18n()
const dropItems = [[
  { label: `FREEROAM`, to: `/${locale.value}/fr`, avatar: { src: '/img/logo/logo-fp.png' }, target: '_self' },
  { label: `ROLEPLAY`, to: `/${locale.value}/rp`, avatar: { src: '/img/logo/logo-rp.png' }, target: '_self' },
  { label: `FP x RP`, to: `/${locale.value}/fpxrp`, avatar: { src: '/img/logo/logo-frp.png' }, target: '_self' },
]]
</script>

<template>
<div class="w-full h-full pt-28">
  <div class="h-full grid grid-cols-2 lg:grid-cols-4 gap-2">
    <div class="flex justify-center col-span-2 sm:col-span-1 order-first">
      <div class="self-center w-fit h-fit">
        <p class="text-3xl font-bold">{{ $t('pages.index.server-info') }}</p>
      </div>
    </div>
    <div class="flex justify-center col-span-2 order-none">
      <NuxtImg src="/img/main.png" format="webp" placeholder class="object-cover md:rounded-[13rem]" />
    </div>
    <div class="flex justify-center col-span-2 sm:col-span-1 -order-1 lg:order-last">
	    <div class="self-center w-fit h-fit">
		    <UDropdown :items="dropItems" mode="hover" class="group" :popper="{ placement: 'bottom-start' }">
			    <UButton variant="soft" size="lg" class="w-fit h-fit text-2xl">
				    <UIcon name="i-fa6-solid-angle-right" class="group-hover:rotate-90 transition transform duration-400" /> {{ $t('pages.index.pick-server') }}
			    </UButton>
		    </UDropdown>
	    </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>