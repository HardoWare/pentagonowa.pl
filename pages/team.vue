<script setup lang="ts">
const ppl = [
	{ name: 'Mochcin', rank: 'CEO', img: '/staff/Mochcin.png', behind: {  } },
	{ name: 'Jacob', rank: 'Vice CEO', img: '/staff/Jacob.png', behind: {  } },
	{ name: 'Desper21', rank: 'Head Administrator', img: '/staff/Desper21.png', behind: {  } },
	{ name: 'Lama23442', rank: 'Administrator', img: '/staff/Lama23442.png', behind: {  } },
	{ name: 'Sulodelsol', rank: 'Administrator', img: '/staff/Sulodelsol.jpg', behind: {  } },
	{ name: 'MakSSym', rank: 'Moderator / Debil', img: '/staff/MakSSym.png', behind: {  } },
	{ name: 'Maciupki', rank: 'Moderator', img: '/staff/Maciupki.gif', behind: {  } },
	{ name: 'Deavid', rank: 'Moderator', img: '/staff/Deavid.png', behind: {  } },
]
</script>

<template>
<div class="w-full min-h-[60vh] pt-28 pb-10">
  <div class="w-4/6 sm:w-4/5 lg:w-3/5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
	  <UCard v-for="gey in ppl" :ui="{ footer: { padding: 'py-2 px-2 sm:px-3' } }">
		  <div class="w-full aspect-square">
			  <LazyNuxtImg :src="gey.img" :alt="gey.name+'-foto'" quality="80" format="webapp" placeholder class="w-full" />
		  </div>
		  <template #footer>
			  <div class="w-full flex justify-between md:flex-wrap lg:flex-nowrap gap-2">
          <span class="text-nowrap">{{ gey.name }}</span>
          <UDivider />
				  <span class="text-nowrap">{{ gey.rank }}</span>
			  </div>
		  </template>
	  </UCard>
  </div>
</div>
</template>

<style scoped>

</style>