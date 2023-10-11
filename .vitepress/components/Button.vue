<script setup lang="ts">
defineProps<{
  link: string;
  icon: string;
}>();
</script>

<template>
  <a
    :href="link"
    class="bg-[var(--vp-badge-tip-bg)] px4 py3 rounded-md block mt2 flex items-center gap2">
    <div :class="(icon, 'flex-none text-lg')" />
    <slot />
  </a>
</template>
