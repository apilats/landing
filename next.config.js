/** @type {import('next').NextConfig} */
const nextConfig = {
  // React Strict Mode activa més comprovacions durant el desenvolupament.
  reactStrictMode: true,


  // Defineix el basePath per a desplegaments amb subdirectoris.
  basePath: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH : "",

  // Activa la generació d'exportacions estàtiques si cal.
  output: 'export',

  // Configuració personalitzada per Webpack.
  webpack: (config) => {
    config.resolve.fallback = { fs: false }; // Evita errors amb el mòdul 'fs'.
    return config;
  },

  // Generació automàtica de fitxers estàtics (per a `next export`).
  images: {
    unoptimized: true, // Evita l'optimització d'imatges per a exportacions estàtiques.
  },
};

module.exports = nextConfig;

