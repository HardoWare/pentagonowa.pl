<script setup lang="ts">

const ppl = [
	{ name: 'Mochcin', rank: 'CEO', img: '/aa.jpg', behind: {  } }
]

</script>

<template>
<div class="w-full min-h-[60vh] pt-28">
  <div class="w-10/12 mx-auto">
	  <UCard v-for="gey in ppl">
		  <div class="w-full aspect-square">
			  <LazyNuxtImg :src="gey.img" :alt="gey.name+'-foto'" quality="80" format="webapp" placeholder />
		  </div>
		  <template #footer>
			  <div class="w-full flex justify-center">
				  <span class="te">{{ gey.rank }}</span>
			  </div>
		  </template>
	  </UCard>
  </div>
</div>
</template>

<style scoped>

</style>