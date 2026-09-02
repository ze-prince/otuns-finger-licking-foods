import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://your-custom-domain.com',
      lastModified: new Date(),
    },
    {
      url: 'https://your-custom-domain.com/menu',
      lastModified: new Date(),
    },
    {
      url: 'https://your-custom-domain.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://your-custom-domain.com/gallery',
      lastModified: new Date(),
    },
    {
      url: 'https://your-custom-domain.com/contact',
      lastModified: new Date(),
    },
  ]
}