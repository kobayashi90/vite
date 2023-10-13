import { defineConfig } from "vitepress";
import fsp from "node:fs/promises";
import { fileURLToPath, URL } from "node:url";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";
import UnoCSS from "unocss/vite";
import { presetUno, presetAttributify, presetIcons } from "unocss";
import { generateImages, generateMeta } from "./hooks";

// FIXME: remove this after we are done
const hostname: string = "https://wvite.pages.dev";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wotaku",
  description: "The Otaku Index",
  lang: "en-US",
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  appearance: "dark",
  titleTemplate: ":title • Wotaku",
  head: [
    ["meta", { name: "theme-color", content: "#7bc5e4" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
    ["link", { rel: "icon", href: "/asset/podarufav.png" }],
  ],
  transformHead: async (context) => generateMeta(context, hostname),
  buildEnd: async (context) => {
    generateImages(context);
  },
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin);
    },
  },
  vite: {
    plugins: [
      UnoCSS({
        presets: [
          presetUno(),
          presetAttributify(),
          presetIcons({
            collections: [
              {
                custom: {
                  "1dm": () => fsp.readFile("../public/icon/1dm.png", "utf-8"),
                  ada: () => fsp.readFile("../public/icon/ada.png", "utf-8"),
                  adg: () => fsp.readFile("../public/icon/adg.png", "utf-8"),
                  ahadns: () => fsp.readFile("../public/icon/ahadns.png", "utf-8"),
                  fork: () => fsp.readFile("../public/icon/fork.png", "utf-8"),
                  idm: () => fsp.readFile("../public/icon/idm.png", "utf-8"),
                  ivpn: () => fsp.readFile("../public/icon/ivpn.png", "utf-8"),
                  jdl: () => fsp.readFile("../public/icon/jdl.png", "utf-8"),
                  lt: () => fsp.readFile("../public/icon/lt.png", "utf-8"),
                  mv: () => fsp.readFile("../public/icon/mv.png", "utf-8"),
                  qb: () => fsp.readFile("../public/icon/qb.png", "utf-8"),
                  trans: () => fsp.readFile("../public/icon/trans.png", "utf-8"),
                  ubo: () => fsp.readFile("../public/icon/ubo.png", "utf-8"),
                  wind: () => fsp.readFile("../public/icon/wind.png", "utf-8"),
                },
              },
            ],
            extraProperties: { display: "inline-block" },
            scale: 1.2,
          }),
        ],
      }),
    ],
    resolve: {
      alias: [
        {
          find: /^.*\/VPBadge\.vue$/,
          replacement: fileURLToPath(new URL("./components/Badge.vue", import.meta.url)),
        },
      ],
    },
  },
  themeConfig: {
    search: {
      provider: "local",
    },
    logo: { src: "/asset/inaidle.webp", width: 24, height: 24 },
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
          { text: "Squidify", link: "/guides/squidify" },
        ],
      },
      { text: "⚗️ Brewing", link: "/brewing" },
      { text: "💖 Credits", link: "/credits" },
    ],
    nav: [
      {
        text: 'Glossary',
        items: [
          { text: 'General', link: '/glossary/general' },
          { text: 'Anime', link: '/glossary/anime' },
          { text: 'Manga', link: '/glossary/manga' },
          { text: 'File Naming', link: '/glossary/file' },
        ]
      },
      {
        text: 'Guides',
        items: [
          { text: 'Digital Manga', link: '/guides/digim' },
          { text: 'IRC', link: '/guides/irc' },
          { text: 'Madokami', link: '/guides/mado' },
          { text: 'Manga Image Editing', link: '/guides/imagedit' },
          { text: 'Network Stream', link: '/guides/ns' },
          { text: 'Squidify', link: '/guides/squidify' }
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/anotherduckling/vite" },
      { icon: "discord", link: "https://discord.gg/WYchhG8z8T" },
    ],
  },
});
