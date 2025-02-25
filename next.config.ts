import createBundleAnalyzer from '@next/bundle-analyzer';
import { createMDX } from 'fumadocs-mdx/next';
import type { NextConfig } from 'next';

const withAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const config: NextConfig = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  eslint: {
    // Replaced by root workspace command
    ignoreDuringBuilds: true,
  },
  serverExternalPackages: [
    'ts-morph',
    'typescript',
    'oxc-transform',
    '@shikijs/twoslash',
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/docs/ui/blocks/layout',
        destination: '/docs/ui/layouts/docs',
        permanent: true,
      },
      {
        source: '/docs/ui/blocks/:path*',
        destination: '/docs/ui/layouts/:path*',
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX();

export default withAnalyzer(withMDX(config));
