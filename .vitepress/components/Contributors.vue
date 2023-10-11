<script setup lang="ts">
import { computed } from "vue";

interface ContributorInfo {
  name: string;
  username: string;
}

const contribs = [
  {
    name: "taskylizard",
    username: "taskylizard",
  },
  {
    name: "TubaApollo",
    username: "TubaApollo",
  },
  {
    name: "Duckling",
    username: "anotherduckling",
  },
] satisfies ContributorInfo[];

const contributors = computed(() => contribs || ([] as ContributorInfo[]));
</script>

<template>
  <div class="flex flex-wrap gap-4 pt-2">
    <div v-for="(c, index) of contributors" :key="c.username" class="flex gap-2 items-center">
      <img :src="`https://github.com/${c.username}.png`" class="w-8 h-8 rounded-full" />
      {{ c.name }}
      <span v-if="index < contributors.length - 1"> • </span>
    </div>
  </div>
</template>
