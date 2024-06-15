/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "downloadr2.apkmirror.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
