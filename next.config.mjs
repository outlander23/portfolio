/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "skillicons.dev",
      "avatars.githubusercontent.com",
      "codeforces-readme-stats.vercel.app",
      "codechef-readme-stats.onrender.com",
      "leetcard.jacoblin.cool",
      "atcoder-readme-stats.vercel.app",
    ], // Allow images from skillicons.dev
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
