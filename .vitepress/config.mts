import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wotaku",
  description: "The Otaku Index",
  head: [['link', { rel: 'icon', href: '/static/asset/podarufav.png' }]],
  themeConfig: {
    logo: '/static/asset/inaidle.webp',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Anime', link: '/anime.md' },
      { text: 'Manga', link: '/manga.md' }
    ],

    sidebar: [
      {
        text: 'Pages',
        items: [
          { text: '⚡ Quick Start', link: '/qs.md' },
          { text: '🌏 Websites', link: '/websites.md' },
          { text: '💾 Software', link: '/software.md' },
          { text: '🗃️ Misc-sites', link: '/misc.md' },
          { text: '🧩 Add-ons', link: '/addons.md' },
          { text: '🗺️ Non-English', link: '/nonen.md' },
          { text: '🔞 NSFW', link: '/nsfw.md' },
          { text: '🗾 Learning Japanese', link: '/jp.md' },
          { text: '📦 Merch', link: '/merch.md' },
          { text: '🗣️ Communities', link: '/comms.md' },
          { text: '📃 Scanlation', link: '/scanlation.md' },
          { text: '⚗️ Brewing', link: '/brewing.md' }
        ]
      },
      {
        text: 'Glossary',
        items: [
          { text: 'General', link: '/glossary/general.md' },
          { text: 'Anime', link: '/glossary/anime.md' },
          { text: 'Manga', link: '/glossary/manga.md' },
          { text: 'File Naming', link: '/glossary/file.md' }
        ]
        
      },
      {
        text: 'Guides',
        items: [
          { text: 'Digital Manga', link: '/guides/digim.md' },
          { text: 'IRC', link: '/guides/irc.md' },
          { text: 'Madokami', link: '/guides/mado.md' },
          { text: 'Manga Image Editing', link: '/guides/imagedit.md' },
          { text: 'Network Stream', link: '/guides/ns.md' },
          { text: 'Squidify', link: 'guides/squidify.md' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/anotherduckling/Wotaku' },
      { icon: 'discord', link: 'https://discord.gg/WYchhG8z8T' }
    ]
  }
})
