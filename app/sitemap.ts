import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://otuns-foods.com.ng',
      lastModified: new Date(),
    },
    {
      url: 'https://otuns-foods.com.ng/menu',
      lastModified: new Date(),
    },
    {
      url: 'https://otuns-foods.com.ng/about',
      lastModified: new Date(),
    },
    {
      url: 'https://otuns-foods.com.ng/gallery',
      lastModified: new Date(),
    },
    {
      url: 'https://otuns-foods.com.ng/contact',
      lastModified: new Date(),
    },
  ]
}