import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Designaxe - Design That Hooks. Code That Delivers.',
    short_name: 'Designaxe',
    description: 'I\'m AttilaBuild, founder of Designaxe. I help founders, creators, and businesses turn raw ideas into clean, modern, and conversion-focused digital products.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon.svg',
        sizes: '32x32',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-icon.svg',
        sizes: '180x180',
        type: 'image/svg+xml',
      },
    ],
  }
}

