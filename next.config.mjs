/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["skillicons.dev", "avatars.githubusercontent.com"], // Allow images from skillicons.dev
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
