<script setup lang="ts">
withDefaults(
  defineProps<{
    link: string;
    icon?: string;
  }>(),
  { icon: "i-octicon-link-external-16" },
);
</script>

<template>
  <a
    :href="link"
    target="_blank"
    class="bg-[var(--vp-badge-tip-bg)] px4 py3 rounded-md block mt2 flex items-center gap2">
    <div :class="icon" />
    <slot />
  </a>
</template>
