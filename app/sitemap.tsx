import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.classi.fit',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1.0,
    },
    {
      url: 'https://www.classi.fit/servizi/prenotazioni',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: 'https://www.classi.fit/servizi/calendario',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
        url: 'https://www.classi.fit/servizi/pacchetti',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.9,
      },
      {
        url: 'https://www.classi.fit/servizi/sito-su-misura',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.9,
      },
      {
        url: 'https://www.classi.fit/servizi/servizi-aggiuntivi',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.9,
      },
      {
        url: 'https://www.classi.fit/studi',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      {
        url: 'https://www.classi.fit/blog',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.3,
      },
      {
        url: 'https://www.classi.fit/blog/building-classifit',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.3,
      },
      {
        url: 'https://www.classi.fit/aiuto',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
      },
  ]
}