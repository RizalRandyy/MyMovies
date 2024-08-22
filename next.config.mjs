/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "image.tmdb.org"
      },
      {
        hostname: "avatars.githubusercontent.com"
      },
    ]
  }
};

export default nextConfig;
