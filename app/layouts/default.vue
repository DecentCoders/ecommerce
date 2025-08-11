<script setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(_isDark) {
    colorMode.preference = _isDark ? "dark" : "light";
  },
});
</script>

<template>
  <div class="relative w-full">
    <ClientOnly v-if="!colorMode?.forced">
      <UButton
        :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
        color="neutral"
        variant="ghost"
        @click="isDark = !isDark"
        class="absolute top-2 right-2 z-50"
      />
    </ClientOnly>
    <div>
      <slot />
    </div>
  </div>
</template>
