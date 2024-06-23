/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    // This configuration is necessary to allow images from specific domains or to allow static image serving.
    domains: ["example.com"], // Add your domains if needed
  },
};

export default nextConfig;
