import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wotaku",
  description: "The Otaku Index",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Anime', link: '/anime.md' },
      { text: 'Manga', link: '/manga.md' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '🌏 Websites', link: '/websites.md' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/anotherduckling/Wotaku' }
    ]
  }
})
