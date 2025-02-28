import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true, // Désactive l’optimisation des images pour éviter les erreurs de domaine
  },
};

export default nextConfig;
