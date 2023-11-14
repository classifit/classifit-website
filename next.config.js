/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    async redirects() {
      return [
        {
          source: '/servizi/calendario',
          destination: '/servizi/gestionale',
          permanent: true, 
        },
        {
            source: '/servizi/pacchetti',
            destination: '/servizi/gestionale',
            permanent: true, 
          },
      ];
    },
  };