/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skillicons.dev",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "codeforces-readme-stats.vercel.app",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "codechef-readme-stats.onrender.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "leetcard.jacoblin.cool",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "atcoder-readme-stats.vercel.app",
        pathname: "/**",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
