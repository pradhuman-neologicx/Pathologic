import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://pathologic.example.com', lastModified: new Date() },
    { url: 'https://pathologic.example.com/privacy-policy', lastModified: new Date() },
    { url: 'https://pathologic.example.com/terms-and-conditions', lastModified: new Date() },
  ]
}
