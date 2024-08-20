<script setup lang="ts">

const ppl = [
	{ name: 'Mochcin', rank: 'CEO', img: '/staff/Mochcin.png', behind: {  } },
	{ name: 'Jacob', rank: 'Vice CEO', img: '/staff/Jacob.png', behind: {  } },
	{ name: 'Desper21', rank: 'Head Administrator', img: '/staff/Desper21.png', behind: {  } },
	{ name: 'Lama23442', rank: 'Administrator', img: '/staff/Lama23442.png', behind: {  } },
	{ name: 'Sulodelsol', rank: 'Administrator', img: '/staff/Sulodelsol.jpg', behind: {  } },
	{ name: 'MakSSym', rank: 'Moderator', img: '/staff/MakSSym.png', behind: {  } },
	{ name: 'Maciupki', rank: 'Moderator', img: '/staff/Maciupki.gif', behind: {  } },
	{ name: 'Deavid', rank: 'Moderator', img: '/staff/Deavid.png', behind: {  } },
]

</script>

<template>
<div class="w-full min-h-[60vh] pt-28">
  <div class="w-10/12 mx-auto flex flex-col gap-3">
	  <UCard v-for="gey in ppl" :ui="{  }">
		  <div class="w-full aspect-square">
			  <LazyNuxtImg :src="gey.img" :alt="gey.name+'-foto'" quality="80" format="webapp" placeholder class="w-full" />
		  </div>
		  <template #footer>
			  <div class="w-full flex justify-between gap-3">
          <span class="text-nowrap">{{ gey.name }}</span>
          <UDivider />
				  <span class="text-nowrap">{{ gey.rank }}</span>
			  </div>
		  </template>
	  </UCard>
  </div>
</div>
</template>

<!--<div class="flip-card">-->
<!--<div class="flip-card-inner">-->
<!--  <div class="flip-card-front">-->
<!--    <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">-->
<!--  </div>-->
<!--  <div class="flip-card-back">-->
<!--    <h1>John Doe</h1>-->
<!--    <p>Architect & Engineer</p>-->
<!--    <p>We love that guy</p>-->
<!--  </div>-->
<!--</div>-->
<!--</div>-->

<style scoped>
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 200px;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}
</style>