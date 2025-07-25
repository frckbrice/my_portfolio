/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.impots.cm',
      },
      {
        protocol: 'https',
        hostname: 'z-p3-scontent.fnsi2-1.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'senimacompany.com',
      },
      {
        protocol: 'https',
        hostname: 'www.minfopra.gov.cm',
      },
      {
        protocol: 'https',
        hostname: 'www.minesec.gov.cm',
      },
      {
        protocol: 'https',
        hostname: 'www.rebasecodecamp.com',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    // Handle framer-motion ESM issues
    config.module.rules.push({
      test: /\.m?js$/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false,
      },
    });

    return config;
  },
};

export default nextConfig;
