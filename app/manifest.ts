import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Max Solutions & Performance',
    short_name: 'Max Solutions',
    description: 'Consultoria Certificada Mercado Livre - Transformamos dados em faturamento',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B1C2D',
    theme_color: '#00C48C',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
