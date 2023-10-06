import { defineConfig } from "vitepress";
import { fileURLToPath, URL } from "node:url";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wotaku",
  description: "The Otaku Index",
  lang: "en-US",
  lastUpdated: true,
  cleanUrls: true,
  appearance: "dark",
  titleTemplate: ":title • Wotaku",
  head: [
    ["meta", { name: "theme-color", content: "#7bc5e4" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
    ["link", { rel: "icon", href: "/asset/podarufav.png" }],
  ],
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin);
    },
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPBadge\.vue$/,
          replacement: fileURLToPath(
            new URL("./components/Badge.vue", import.meta.url)
          ),
        },
      ],
    },
  },
  themeConfig: {
    search: {
      provider: "local",
    },
    logo: "/asset/inaidle.webp",
    nav: [
      { text: "Home", link: "/" },
      { text: "Anime", link: "/anime" },
      { text: "Manga", link: "/manga" },
    ],
    sidebar: [
      { text: "⚡ Quick Start", link: "/qs" },
      { text: "🌏 Websites", link: "/websites" },
      { text: "💾 Software", link: "/software" },
      { text: "🗃️ Misc-sites", link: "/misc" },
      { text: "🧩 Add-ons", link: "/addons" },
      { text: "🗺️ Non-English", link: "/nonen" },
      { text: "🔞 NSFW", link: "/nsfw" },
      { text: "🗾 Learning Japanese", link: "/jp" },
      { text: "📦 Merch", link: "/merch" },
      { text: "🗣️ Communities", link: "/comms" },
      { text: "📃 Scanlation", link: "/scanlation" },
      { text: "⚗️ Brewing", link: "/brewing" },
      {
        text: "📖 Glossary",
        collapsed: true,
        items: [
          { text: "General", link: "/glossary/general" },
          { text: "Anime", link: "/glossary/anime" },
          { text: "Manga", link: "/glossary/manga" },
          { text: "File Naming", link: "/glossary/file" },
        ],
      },
      {
        text: "📂 Guides",
        collapsed: true,
        items: [
          { text: "Digital Manga", link: "/guides/digim" },
          { text: "IRC", link: "/guides/irc" },
          { text: "Madokami", link: "/guides/mado" },
          { text: "Manga Image Editing", link: "/guides/imagedit" },
          { text: "Network Stream", link: "/guides/ns" },
          { text: "Squidify", link: "guides/squidify" },
        ],
      },
      { text: "⚗️ Brewing", link: "/brewing" },
      { text: "💖 Credits", link: "/credits" },
      { text: "🗄️Megathread", link: "/megathread" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/anotherduckling/Wotaku" },
      { icon: "discord", link: "https://discord.gg/WYchhG8z8T" },
    ],
  },
});
