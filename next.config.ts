
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    // Allow serving local images from the public directory
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: false, // Changed from true
  },
  experimental: {
    allowedDevOrigins: ['9000-firebase-studio-1749112787293.cluster-ys234awlzbhwoxmkkse6qo3fz6.cloudworkstations.dev'],
  },
};

export default nextConfig;
