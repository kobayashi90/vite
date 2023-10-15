<script setup lang="ts">
interface Props {
  text?: string;
  link?: string;
  type?: "info" | "tip" | "warning" | "danger";
  icon?: string;
}
withDefaults(defineProps<Props>(), {
  type: "info",
});
</script>

<template>
  <component :is="link ? 'a' : 'span'" class="VPBadge" :class="link ? 'tip' : type" :href="link">
    <slot>
      <div v-if="icon" :class="icon"></div>
      {{ text }}</slot
    >
  </component>
</template>

<style scoped>
.VPBadge {
  display: inline-flex;
  margin-left: 2px;
  border: 1px solid transparent;
  border-radius: 12px;
  padding: 0 10px;
  line-height: 22px;
  font-size: 12px;
  font-weight: 500;
  transform: translateY(-2px);
  align-items: center;
  gap: 0.2rem;
  padding-right: 10px;
}

.vp-doc h1 > .VPBadge {
  margin-top: 4px;
  vertical-align: top;
}

.vp-doc h2 > .VPBadge {
  margin-top: 3px;
  padding: 0 8px;
  vertical-align: top;
}

.vp-doc h3 > .VPBadge {
  vertical-align: middle;
}

.vp-doc h4 > .VPBadge,
.vp-doc h5 > .VPBadge,
.vp-doc h6 > .VPBadge {
  vertical-align: middle;
  line-height: 18px;
}

.VPBadge.info {
  border-color: var(--vp-badge-info-border);
  color: var(--vp-badge-info-text);
  background-color: var(--vp-badge-info-bg);
}

.VPBadge.tip {
  border-color: var(--vp-badge-tip-border);
  color: var(--vp-badge-tip-text);
  background-color: var(--vp-badge-tip-bg);
}

.VPBadge.warning {
  border-color: var(--vp-badge-warning-border);
  color: var(--vp-badge-warning-text);
  background-color: var(--vp-badge-warning-bg);
}

.VPBadge.danger {
  border-color: var(--vp-badge-danger-border);
  color: var(--vp-badge-danger-text);
  background-color: var(--vp-badge-danger-bg);
}
</style>
