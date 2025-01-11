/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.microcms-assets.io",
            },
        ],
    },
};

export default nextConfig;
