<script setup lang="ts">
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers, VPTeamPageSection } from "vitepress/theme";

interface Credits {
  avatar: string;
  name: string;
  links?: { icon: string; link: string }[];
}

const contributors = [
  {
    avatar: "/pfp/meme.png",
    name: "Memenami",
  },
  {
    name: "Static",
    avatar: "https://github.com/whitenoisy.png",
    links: [{ icon: "github", link: "https://github.com/whitenoisy" }],
  },
  {
    name: "Venlicht",
    avatar: "https://github.com/RenaraScope.png",
    links: [{ icon: "github", link: "https://github.com/RenaraScope" }],
  },
  {
    name: "Zinklog",
    avatar: "/pfp/zinc.png",
    links: [{ icon: "github", link: "https://github.com/zinklog2" }],
  },
] satisfies Credits[];

const thanks = [
  {
    avatar: "https://www.github.com/taskylizard.png",
    name: "taskylizard",
    links: [{ icon: "github", link: "https://github.com/taskylizard" }],
  },
  {
    name: "TubaApollo",
    avatar: "https://github.com/TubaApollo.png",
    links: [{ icon: "github", link: "https://github.com/TubaApollo" }],
  },
  {
    avatar: "https://github.com/knightmob.png",
    name: "Abyss",
    links: [{ icon: "github", link: "https://github.com/knightmob" }],
  },
  {
    avatar: "https://github.com/farahnur42.png",
    name: "Fahim",
    links: [{ icon: "github", link: "https://github.com/farahnur42" }],
  },
  {
    avatar: "https://github.com/Helmasko.png",
    name: "Helmasko",
    links: [{ icon: "github", link: "https://github.com/Helmasko" }],
  },
  {
    name: "Ishtar",
    avatar: "https://ishtar.wtf/favicon.ico",
  },
  {
    name: "Kai",
    avatar: "https://github.com/Kai-FMHY.png",
    links: [{ icon: "github", link: "https://github.com/Kai-FMHY" }],
  },
  {
    name: "loocool",
    avatar: "https://github.com/loocool2.png",
    links: [{ icon: "github", link: "https://github.com/loocool2" }],
  },
  {
    name: "nuff",
    avatar: "https://github.com/gengotech.png",
    links: [{ icon: "github", link: "https://github.com/gengotech" }],
  },
] satisfies Credits[];
</script>

<template>
  <VPTeamPage>
    <VPTeamPageTitle>
      <template #title>Contributors</template>
      <template #lead>Thank you to all the contributors for your dedications and resources.</template>
    </VPTeamPageTitle>
    <VPTeamMembers size="small" :members="contributors" />
    <br />
    <VPTeamPageSection>
      <template #title>Special Thanks to</template>
      <template #members>
        <VPTeamMembers size="small" :members="thanks" />
      </template>
    </VPTeamPageSection>
  </VPTeamPage>
</template>
