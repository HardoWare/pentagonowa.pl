<script setup lang="ts">
const { setLocale } = useI18n()
</script>

<template>
  <div class="fixed bottom-1 right-2 md:bottom-4 md:right-6 bg-gray-900 bg-opacity-70 flex flex-col flex-nowrap rounded-xl">
    <UButton label="PL" variant="ghost" size="xl" key="pl" @click.prevent.stop="setLocale('pl')" />
    <UDivider :ui="{ border: { base: 'dark:border-gray-500' } }"/>
    <UButton label="EN" variant="ghost" size="xl" key="en" @click.prevent.stop="setLocale('en')" />
  </div>
</template>
