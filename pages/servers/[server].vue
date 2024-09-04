<script setup lang="ts">
const { setAsyncInterval, clearAsyncInterval } = useAsyncInterval()
const { params } = useRoute()
const dcLinks: { [key: string]: string } = {
	fr: 'https://discord.gg/P5Q7XDBVaJ',
	rp: 'https://discord.gg/wybawmtmVY',
	fpxrp: 'https://discord.gg/cXrJ8a278Y',
}
const photo: { [key: string]: string } = {
	fr: 'fr-main.png',
	rp: 'rp-main.png',
	fpxrp: 'frp-main.png',
}
const connectLinks: { [key: string]: string } = {
  fr: 'https://cfx.re/join/o73m6j',
  rp: 'https://cfx.re/join/koel4a',
  fpxrp: 'https://cfx.re/join/jxgq8a',
}
const currentPeopleOnServer: Ref<number | undefined> = ref(0)
const loading = ref(true)
const error = ref(false)
const interval = ref(0)
onMounted(() => {
	interval.value = setAsyncInterval(async () => {
		try {
			currentPeopleOnServer.value = await $fetch('/api/currentPlayers', { query: params })
		} catch (e) {
			error.value = true
		} finally {
			loading.value = false
		}
    if (currentPeopleOnServer.value === undefined) {
      error.value = true
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
				<div class="self-center">
					<div>
						<p class="text-2xl h-min self-center">
							{{ $t('pages.index.currently-on-server') }}:
						</p>
						<UButton icon="i-fa6-solid-user-group"
						         :loading="loading"
						         disabled
						         :ui="{ base: 'disabled:opacity-100' }"
						         variant="ghost" size="xl" class="w-fit h-fit text-2xl"
						>
              <div v-if="!error">
                {{ currentPeopleOnServer?.toString() }} online
              </div>
              <div v-else>
                {{ $t('pages.index.api-error') }}
              </div>
            </UButton>
					</div>
				</div>
			</div>
			<div class="flex justify-center col-span-2 order-none">
				<NuxtImg :src="'/img/' + photo[Array.isArray($route.params.server) ? $route.params.server[0] : $route.params.server]" format="webp" placeholder class="object-cover lg:rounded-[13rem]" />
			</div>
			<div class="flex justify-center col-span-2 sm:col-span-1 -order-1 lg:order-last">
				<div class="w-full self-center flex flex-row justify-around">
					<UButton icon="i-fa6-solid-plug"
					         :label="$t('pages.index.connect')"
					         :to="connectLinks[Array.isArray($route.params.server) ? $route.params.server[0] : $route.params.server]"
					         target="_blank"
					         variant="soft" size="xl" class="w-fit h-fit"
					/>
					<UButton icon="i-ic-baseline-discord"
					         label="Discord"
					         :to="dcLinks[Array.isArray($route.params.server) ? $route.params.server[0] : $route.params.server]"
					         target="_blank"
					         variant="soft" size="xl" class="w-fit h-fit"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>