/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/mithun-nextjs-portfolio",
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            }
        ]
    }
};

export default nextConfig;
